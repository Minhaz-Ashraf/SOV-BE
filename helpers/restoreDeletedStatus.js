import { Agent } from "../models/agent.model.js";
import { Company } from "../models/company.model.js";
import { Institution } from "../models/institution.model.js";
import { Student } from "../models/student.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { Ticket } from "../models/ticket.model.js";
import { Withdrawal } from "../models/withdrawal.model.js";

export const restoreDeletedStatus = async (id, type, session) => {
  console.log("Restoring deleted status for ID:", id, "Type:", type);

  if (type === "student") {
    const studentInfo = await StudentInformation.findById(id).session(session);
    if (studentInfo) {
      console.log("Found StudentInformation:", studentInfo._id);
      studentInfo.deleted = false;
      await studentInfo.save({ session });

      if (studentInfo.studentId) {
        const student = await Student.findById(studentInfo.studentId).session(session);
        if (student) {
          console.log("Found related Student:", student._id);
          student.deleted = false;
          await student.save({ session });
        }
      }

      const institutionUpdateResult = await Institution.updateMany(
        { userId: id },
        { $set: { deleted: false } },
        { session }
      );
      console.log("Updated Institutions:", institutionUpdateResult.modifiedCount);

      const withdrawalUpdateResult = await Withdrawal.updateMany(
        { userId: id },
        { $set: { deleted: false } },
        { session }
      );
      console.log("Updated Withdrawals:", withdrawalUpdateResult.modifiedCount);

      const ticketUpdateResult = await Ticket.updateMany(
        { createdBy: id },
        { $set: { deleted: false } },
        { session }
      );
      console.log("Updated Tickets:", ticketUpdateResult.modifiedCount);
    }
  }

  if (type === "company") {
    const company = await Company.findOne({ _id: id }).session(session);
    if (company) {
      console.log("Found Company:", company._id);
      company.deleted = false;
      await company.save({ session });

      const agent = await Agent.findById(company.agentId).session(session);
      if (agent) {
        console.log("Found related Agent:", agent._id);
        agent.deleted = false;
        await agent.save({ session });
      }

      const studentInfoList = await StudentInformation.find({ agentId: company.agentId }).session(session);
      console.log("Found StudentInformation records for Agent:", studentInfoList.length);

      for (const studentInfo of studentInfoList) {
        console.log("Updating StudentInformation:", studentInfo._id);
        studentInfo.deleted = false;
        await studentInfo.save({ session });

        const institutionUpdateResult = await Institution.updateMany(
          { studentInformationId: studentInfo._id },
          { $set: { deleted: false } },
          { session }
        );
        console.log("Updated Institutions for StudentInformation:", institutionUpdateResult.modifiedCount);

        const withdrawalUpdateResult = await Withdrawal.updateMany(
          { userId: studentInfo._id },
          { $set: { deleted: false } },
          { session }
        );
        console.log("Updated Withdrawals for StudentInformation:", withdrawalUpdateResult.modifiedCount);
      }

      const institutionUpdateResult = await Institution.updateMany(
        { userId: company.agentId },
        { $set: { deleted: false } },
        { session }
      );
      console.log("Updated Institutions for Company:", institutionUpdateResult.modifiedCount);

      const ticketUpdateResult = await Ticket.updateMany(
        { createdBy: company.agentId },
        { $set: { deleted: false } },
        { session }
      );
      console.log("Updated Tickets for Company:", ticketUpdateResult.modifiedCount);
    }
  }
};
