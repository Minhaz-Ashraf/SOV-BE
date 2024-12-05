import { Institution } from "../models/institution.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



export const getTotalStudentCount = asyncHandler(async (req, res) => {
    // Ensure the user is an agent (assuming role '2' is for agents)
    if (req.user.role !== '2') {
      return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view student information"));
    }
  
    // Calculate the date 7 days ago from today
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
    // Calculate the date range 7 days before the last 7 days (for the previous week's count)
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
    // Count student records for the last 7 days
    const insertedRecords = await StudentInformation.countDocuments({
      agentId: req.user.id,
      createdAt: { $gte: sevenDaysAgo },
      deleted: false
    });
  
    // Count student records for the previous 7 days (from 14 days ago to 7 days ago)
    const previousRecordCount = await StudentInformation.countDocuments({
      agentId: req.user.id,
      createdAt: { $gte: fourteenDaysAgo, $lt: sevenDaysAgo },
      deleted: false
    });
  
    // Calculate the percentage increase relative to the previous period
    const percentageIncrease = previousRecordCount > 0
      ? (((insertedRecords - previousRecordCount) / previousRecordCount) * 100).toFixed(2)
      : (insertedRecords > 0 ? 100 : 0); // If no previous records, it's 100% increase if new records exist
  
    // Count the total student records for the agent from the beginning to the current date
    const totalRecords = await StudentInformation.countDocuments({
      agentId: req.user.id,
      deleted: false
    });
  
    // Return only total student count and percentage increase
    return res.status(200).json(new ApiResponse(200, {
      totalRecords,
      percentageIncrease
    }, "Total student count and percentage increase fetched successfully"));
  });
  
  
  export const getTotalApplicationCount = asyncHandler(async (req, res) => {
    // Ensure the user is authorized (assuming role '2' is for agents)
    if (req.user.role !== '2') {
        return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
    }

    const { year } = req.query;
    let dateFilter = {};
    let previousPeriodFilter = {};

    if (year) {
        // If a year is provided, calculate the date range for that year
        const startOfYear = new Date(`${year}-01-01T00:00:00Z`);
        const endOfYear = new Date(`${year}-12-31T23:59:59Z`);
        dateFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };

        // Filter for records before the start of the year
        previousPeriodFilter.createdAt = { $lt: startOfYear };
    } else {
        // Calculate the date 7 days ago
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Calculate the date range 7 days before the last 7 days (for previous period count)
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Filter for records in the last 7 days
        dateFilter.createdAt = { $gte: sevenDaysAgo };

        // Filter for records before the last 7 days
        previousPeriodFilter.createdAt = { $gte: fourteenDaysAgo, $lt: sevenDaysAgo };
    }

    // Query to get the total count of applications for the logged-in user (agent)
    const totalRecords = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false
    });

    // Query to get the count of applications inserted in the last 7 days or the specified year
    const insertedRecords = await Institution.countDocuments({
        userId: req.user.id,
        ...dateFilter,
        deleted: false
    });

    // Query to get the count of records before the last 7 days or the specified year
    const previousRecordCount = await Institution.countDocuments({
        userId: req.user.id,
        ...previousPeriodFilter,
        deleted: false
    });

    // Calculate the percentage increase (if previousRecordCount > 0)
    let percentageIncrease = 0;
    if (previousRecordCount > 0) {
        percentageIncrease = (((insertedRecords - previousRecordCount) / previousRecordCount) * 100).toFixed(2);
    } else if (insertedRecords > 0) {
        // If there were no records previously, but new records are added, the increase is 100%
        percentageIncrease = 100;
    }

    // Return the total count and the percentage increase
    return res.status(200).json(new ApiResponse(200, {
        totalRecords,
        percentageIncrease
    }, `Total applications count and percentage increase fetched successfully`));
});


export const getTotalUnderReviewCount = asyncHandler(async (req, res) => {
    // Ensure the user is authorized (assuming role '2' is for agents)
    if (req.user.role !== '2') {
        return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
    }

    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Calculate the date range for 14 days ago
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Query to get the total count of "under review" applications for the logged-in user (agent)
    const totalUnderReview = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 
                'offerLetter.status': 'underreview',
                'offerLetter.personalInformation': { $exists: true } // Check if offerLetter has data
            },
            { 
                'gic.status': 'underreview',
                'gic.personalDetails': { $exists: true } // Check if gic has data
            }
        ]
    });

    // Query to get the count of "under review" applications in the last 7 days
    const recentUnderReview = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 
                'offerLetter.status': 'underreview',
                'offerLetter.personalInformation': { $exists: true } // Check if offerLetter has data
            },
            { 
                'gic.status': 'underreview',
                'gic.personalDetails': { $exists: true } // Check if gic has data
            }
        ],
        createdAt: { $gte: sevenDaysAgo }
    });

    // Query to get the count of "under review" applications from 14 days ago to 7 days ago (previous period)
    const previousUnderReview = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 
                'offerLetter.status': 'underreview',
                'offerLetter.personalInformation': { $exists: true } // Check if offerLetter has data
            },
            { 
                'gic.status': 'underreview',
                'gic.personalDetails': { $exists: true } // Check if gic has data
            }
        ],
        createdAt: { $gte: fourteenDaysAgo, $lt: sevenDaysAgo }
    });

    // Calculate the percentage increase
    const underReviewPercentage = previousUnderReview > 0
        ? (((recentUnderReview - previousUnderReview) / previousUnderReview) * 100).toFixed(2)
        : recentUnderReview > 0 ? 100 : 0; // 100% increase if new entries exist and no previous data

    // Return the total "under review" count and the percentage increase
    return res.status(200).json(new ApiResponse(200, {
        totalUnderReview,
        underReviewPercentage
    }, `Total under review applications and percentage increase fetched successfully`));
});




export const getTotalCompletedCount = asyncHandler(async (req, res) => {
    // Ensure the user is authorized (assuming role '2' is for agents)
    if (req.user.role !== '2') {
        return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
    }

    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Calculate the date range for previous period (14 days ago to 7 days ago)
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Query to get the total count of "completed" applications for the logged-in user (agent)
    const totalCompleted = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 'offerLetter.status': 'approved' },  
            { 'gic.status': 'approved' }
        ]
    });

    // Query to get the count of "completed" applications in the last 7 days
    const recentCompleted = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 'offerLetter.status': 'approved' },
            { 'gic.status': 'approved' }
        ],
        createdAt: { $gte: sevenDaysAgo }
    });

    // Query to get the count of "completed" applications from 14 days ago to 7 days ago (previous period)
    const pastCompleted = await Institution.countDocuments({
        userId: req.user.id,
        deleted: false,
        $or: [
            { 'offerLetter.status': 'approved' },
            { 'gic.status': 'approved' }
        ],
        createdAt: { $gte: fourteenDaysAgo, $lt: sevenDaysAgo }
    });

    // Calculate the percentage increase in "completed" applications
    const increasePercentage = pastCompleted > 0
        ? (((recentCompleted - pastCompleted) / pastCompleted) * 100).toFixed(2)
        : recentCompleted > 0 ? 100 : 0; // If no past data and new entries exist, set to 100%

    // Return the total "completed" count and the increase percentage
    return res.status(200).json(new ApiResponse(200, {
        totalCompleted,
        increasePercentage,
    }, `Total completed applications and percentage increase fetched successfully`));
});

export const getTotalApplicationOverview = asyncHandler(async(req, res)=>{

if (req.user.role !== '2') {
        return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
    }

    const { type, year, month } = req.query;

    // Construct filter for the query
    const match = {
        userId: req.user.id,
        // Filtering by application type
        ...(type && type !== 'all' ? { [`${type}.status`]: { $exists: true } } : {}),
    };

    // If year and month are provided, set date range
    if (year && month) {
        const startDate = new Date(`${year}-${month}-01T00:00:00Z`);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1); // Move to the first day of the next month

        match.createdAt = { $gte: startDate, $lt: endDate };
    }

    // Count the total number of applications
    const totalApplications = await Institution.countDocuments(match);

    // Count offer letters
    const offerLetterCount = await Institution.countDocuments({
        ...match,
        'offerLetter.status': { $exists: true },
        deleted: false
    });

    // Count GIC applications
    const gicCount = await Institution.countDocuments({
        ...match,
        'gic.status': { $exists: true },
        deleted: false
    });
    
    const visaCount = await Institution.countDocuments({
        ...match,
        'visa.status': { $exists: true },
        deleted: false
    });

    // Return the counts in the response
    return res.status(200).json(new ApiResponse(200, {
        totalApplications,
        offerLetterCount,
        gicCount,
        visaCount
    }, 'Application counts fetched successfully'));
});

  

export const getTotalUsersCountForAgent = asyncHandler(async (req, res) => {
  if (req.user.role !== '2') {
    return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
  }
  const { date } = req.query;
  const matchFilter = {agentId: req.user.id, deleted : false};
  if (date) {
    const startOfYear = new Date(`${date}-01-01`);
    const endOfYear = new Date(`${date}-12-31`);
    matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
  }
  const studentMonthlyCounts = await StudentInformation.aggregate([
    { $match: matchFilter },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        count: 1,
      },
    },
    { $sort: { year: 1, month: 1 } },
  ]);
  const monthlyCounts = {
    students: studentMonthlyCounts,
  };
  return res
    .status(200)
    .json(
      new ApiResponse(200, monthlyCounts, "user monthly count got successfully")
    );
});

export const getApplicationMonthlyCountForAgent = asyncHandler(async (req, res) => {
  if (req.user.role !== '2') {
    return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
  }
  const { date, applicationType } = req.query;
  const matchFilter = {userId: req.user.id};
  if (date) {
    const startOfYear = new Date(`${date}-01-01`);
    const endOfYear = new Date(`${date}-12-31`);
    matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
  }
  if (applicationType) {
    // matchFilter[`${applicationType}.type`] = applicationType;
    matchFilter[`${applicationType}.status`] = { $exists: true };
  }
  const applicationMonthlyCounts = await Institution.aggregate([
    { $match: matchFilter },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
          type: `$${applicationType}.type`,
        },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        applicationType: "$_id.type",
        count: 1,
      },
    },
    { $sort: { year: 1, month: 1 } },
  ]);

  const monthlyCounts = {
    applicationCounts: applicationMonthlyCounts,
  };
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        monthlyCounts,
        "Application monthly count got successfully"
      )
    );
});