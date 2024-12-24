


export const agentSignUpTemp = (firstName, otp)=>{
    
    return `
      <p>Dear <strong>${firstName}</strong>,</p>
      <p>Thank you for registering with Sov Portal! To complete your Agent account setup, please verify your email address by using the One-Time Password (OTP) provided below.</p>
      <p><strong>Your OTP: ${otp}</strong></p>
      <p>Please enter this code in the required field on our website. This OTP is valid for the next 1 minute and can only be used once.</p>
      <p>If you did not initiate this request, please ignore this email.</p>
      <p>If you need any assistance, feel free to contact our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>
      <p>Best regards,<br/>Sov Portal<br/>Helping you make your study abroad dreams come true!</p>
    `;
}

export const agentAccountCredentials = (firstName, email, password) =>{
  // console.log()
  return `<p>Dear <strong>${firstName}</strong>,</p>
  
<p>Congratulations! Your email has been successfully verified, and your agent sign-up account on Sov Portal is now active.</p>

<p>Here are your login credentials:</p>
<ul>
  <li><strong>Website Link:</strong> <a href="https://sovportal.in">sovportal.in</a></li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Password:</strong> ${password}</li>
</ul>

<p>You can now log in and complete your registration process.</p>

<p>If you face any issues or need assistance, feel free to reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for partnering with us. We look forward to helping you assist students in their study abroad journey!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting your success in global education</p>
`;
}

export const studentSignUpTemp = (firstName, otp)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Thank you for signing up with Sov Portal! To complete your Student account setup, please verify your email address by using the One-Time Password (OTP) provided below.</p>

<p><strong>Your OTP: ${otp}</strong></p>

<p>Please enter this code in the required field on our website. This OTP is valid for the next 1 minute and can only be used once.</p>

<p>If you did not initiate this request, please ignore this email.</p>

<p>If you need any assistance, feel free to contact our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you make your study abroad dreams come true!</p>
`;
}

export const studentAccountCredentials = (firstName, email, password)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Congratulations! Your email has been successfully verified, and your student sign-up account on Sov Portal is now active.</p>

<p>Here are your login credentials:</p>
<ul>
  <li><strong>Website Link:</strong> <a href="https://sovportal.in">sovportal.in</a></li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Password:</strong> ${password}</li>
</ul>

<p>You can now log in and complete your registration process.</p>

<p>If you face any issues or need assistance, feel free to reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for partnering with us. We look forward to helping you assist students in their study abroad journey!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting your success in global education</p>
`;
}

export const agentRegistrationComplete = (firstName)=>{
    return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Thank you for registering as an agent on Sov Portal! We have successfully received your details and completed your registration process.</p>

<p><strong>What’s Next?</strong></p>
<p>Your account is currently pending approval from our admin team. Once your account is approved, you will be granted access to your agent dashboard, where you can start managing your clients' study visa applications.</p>

<p><strong>Approval Time:</strong> Our team will review your details within the next <strong>[24-48 hours]</strong>. You will receive a confirmation email once your account has been activated.</p>

<p>If you have any questions or require further assistance, please don’t hesitate to reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your patience and look forward to working with you.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Empowering agents to streamline study visa processes</p>
`;
}

export const studentRegistrationComplete = (firstName)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Thank you for registering as a student on Sov Portal! We have successfully received your details and completed your registration process.</p>

<p><strong>What’s Next?</strong></p>
<p>Your account is now pending approval from our admin team. Once your account is approved, you will gain access to your student dashboard, where you can explore study visa options, track your application status, and access other helpful resources.</p>

<p><strong>Approval Time:</strong> Our team will review your details within the next <strong>[24-48 hours]</strong>. You will receive a confirmation email once your account has been activated.</p>

<p>If you have any questions or require further assistance, please don’t hesitate to reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your patience and look forward to working with you.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Empowering agents to streamline study visa processes</p>
`;
}

export const studentOfferLetterApprovedTemp = (firstName, collegeName, country, courseName)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Congratulations! We are excited to inform you that your offer letter from <strong>${collegeName}</strong> in <strong>${country}</strong> for the <strong>${courseName}</strong> program has been approved.
</p>

<p>To secure your spot in this program, please proceed with the payment for the offer letter as soon as possible.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Review the Offer Letter:</strong> You can access your approved offer letter in the portal.</li>
  <li><strong>Complete the Payment:</strong> For payment procedure. Our team will contact you to confirm your admission.</li>
</ul>

<p>If you need assistance with the payment process or have any questions, please contact our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We’re thrilled to support you as you take this important step toward achieving your educational goals. Please complete the payment soon to ensure your place at <strong>${collegeName}</strong>.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you make your study abroad dreams a reality</p>
`;
}

export const studentOfferLetterRejectedTemp =  (firstName, collegeName, country, courseName, rejectionReason )=>{
  
  console.log(rejectionReason, "ppppppp")
     return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Thank you for applying to <strong>${collegeName}</strong> in <strong>${country}</strong> for the <strong>${courseName}</strong> program. Unfortunately, your offer letter has been rejected.</p>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>You can modify or edit your offer letter based on the reason above and resubmit it for reconsideration.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Review and update your application:</strong> Address the issue that led to the rejection.</li>
  <li><strong>Resubmit the offer letter:</strong> Once you have made the necessary changes, resubmit your offer letter for approval.</li>
</ul>

<p>Our team is here to assist you if you need help with the resubmission process. Please contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We encourage you to make the required changes and resubmit soon. We are committed to helping you secure your place at <strong>${collegeName}</strong> and achieve your study abroad dreams.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting you on your path to higher education abroad</p>
`
}


export const agentOfferLetterApproved = (studentId, studentName,  agentFirstName, collegeName, country, courseName )=>{
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We are pleased to inform you that the offer letter for <strong>${studentName}</strong> [<strong>${studentId} </strong>] has been approved by <strong>${collegeName}</strong> in <strong>${country}</strong> for the <strong>${courseName}</strong> program.</p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId}</li>
  <li><strong>Student Name:</strong> ${studentName}</li>
  <li><strong>College Name:</strong> ${collegeName}</li>
  <li><strong>Course Name:</strong> ${courseName}</li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p>You can now log in to your agent portal and access the approved offer letter. Please follow the next steps, including for payment procedure to the student or any other necessary actions. Our team will contact you.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Access the Offer Letter:</strong> You can download and review the offer letter through your agent dashboard.</li>
  <li><strong>Notify the Student:</strong> Ensure that the student is informed about the approval and take the next steps, including the payment for the offer letter, if required.</li>
</ul>

<p>If you have any questions or need further assistance, please contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your partnership and look forward to helping your student successfully proceed with their application.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Empowering agents to help students achieve their study abroad goals</p>
`
}

export const agentOfferLetterRejected = (agentFirstName, collegeName, country, courseName, rejectionReason, studentName, studentId)=>{
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We regret to inform you that the offer letter for <strong></strong> has been rejected by <strong>${collegeName}</strong> in <strong>${country}</strong> for the <strong>${courseName}</strong> program.</p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
  <li><strong>College Name:</strong> ${collegeName}</li>
  <li><strong>Course Name:</strong> ${courseName}</li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>As the agent handling this application, you can modify or update the details that led to the rejection and resubmit the offer letter for further review.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Log in to the portal</strong></li>
  <li><strong>Review and modify:</strong> Update the necessary details mentioned in the rejection reason.</li>
  <li><strong>Resubmit the offer letter:</strong> Once the required changes have been made, resubmit the offer letter for approval.</li>
</ul>

<p>If you have any questions or require assistance with the modifications, please feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your attention to this matter and look forward to helping your student proceed with their application.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Partnering with you to help students achieve their study abroad dreams</p>

`;
}


export const agentPasswordResetEmail = (otpCode) => {
  return `<p>Dear <strong>Agent</strong>,</p>

<p>We received a request to reset your password for your agent account on Sov Portal. To proceed, please verify your identity by entering the OTP (One-Time Password) provided below:</p>

<p><strong>Your OTP:</strong> <strong>${otpCode}</strong></p>

<p>If you did not request a password reset, please ignore this email or contact our support team immediately.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li>Enter the OTP on the password reset page.</li>
  <li>Once verified, you’ll be able to set a new password.</li>
</ul>

<p>For security reasons, do not share this OTP with anyone. If you need further assistance, please reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for using Sov Portal!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Your trusted partner in study visa solutions</p>
`;
};


export const studentPasswordResetEmail = (otpCode) => {
  return `<p>Dear Student</p>

<p>We received a request to reset your password for your student account on Sov Portal. To proceed, please verify your identity by entering the OTP (One-Time Password) provided below:</p>

<p><strong>Your OTP:</strong> <strong>${otpCode}</strong></p>

<p>If you did not request a password reset, please ignore this email or contact our support team immediately.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li>Enter the OTP on the password reset page.</li>
  <li>Once verified, you’ll be able to set a new password.</li>
</ul>

<p>For security reasons, do not share this OTP with anyone. If you need further assistance, please reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for using Sov Portal!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting you on your study abroad journey</p>
`;
};


export const studentRegistrationCompleteByAgent = (firstName, agentName, studentID, studentName, agentEmail, agentPhone) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>We are pleased to inform you that you have been successfully registered on Sov Portal by your agent, <strong>${agentName}</strong>. From now on, all actions related to your study abroad application will be handled by your agent on your behalf.</p>

    <p><strong>What’s Next?</strong></p>
    <p>Your agent will be responsible for managing your profile, submitting your applications, and handling all necessary steps to ensure the smooth processing of your study visa and admissions. You will be kept informed of any updates or actions through email notifications.</p>

    <p><strong>Student Details:</strong></p>
    <p>Student ID: <strong>${studentID}</strong><br>
    Student Name: <strong>${studentName}</strong></p>

    <p>If you have any questions or need to provide additional information, feel free to contact your agent at <a href="mailto:${agentEmail}">${agentEmail}</a> or <strong>${agentPhone}</strong>. You can also reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

    <p>We are excited to assist you on your journey to studying abroad and will work closely with your agent to ensure everything goes smoothly.</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Supporting you on your study abroad journey</p>
  `;
};

export const studentAccountApproved = (firstName) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>Congratulations! Your account on Sov Portal has been approved by our admin team, and you can now log in to your student dashboard.</p>

    <p><strong>Once logged in, you will be able to:</strong></p>
    <ul>
      <li>Explore offer letter options</li>
      <li>Explore study visa options</li>
      <li>Submit and track your application status</li>
      <li>Access resources to guide you through the application process</li>
      <li>Get personalised assistance for your study abroad journey</li>
    </ul>

    <p>We are excited to assist you as you take the next steps toward achieving your educational goals. Should you have any questions or need support, feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

    <p>Welcome to Sov Portal! We look forward to being a part of your journey toward studying abroad.</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Your trusted guide to studying abroad</p>
  `;
};


export const studentRegistrationRejected = (firstName, rejectionReason) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>Thank you for registering on Sov Portal. Unfortunately, after reviewing your profile, our admin team was unable to approve your registration at this time.</p>

    <p><strong>Reason for Rejection:</strong></p>
    <p>${rejectionReason}</p>

    <p><strong>Next Steps:</strong></p>
    <ol>
      <li><strong>Log in to the portal:</strong> <a href="https://sovportal.in" target="_blank">sovportal.in</a></li>
      <li><strong>Review and correct:</strong> Update your profile based on the reason mentioned above.</li>
      <li><strong>Resubmit for approval:</strong> Once you’ve made the necessary changes, resubmit your profile for admin review.</li>
    </ol>

    <p>Our team will re-evaluate your submission once the changes have been made. If you have any questions or need assistance regarding the rejection, please reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

    <p>We’re here to support you in successfully completing your registration, and we look forward to helping you on your journey to studying abroad.</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Guiding you through every step of your study abroad journey</p>
  `;
};

export const agentAccountApproved = (firstName) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>Good news! Your agent account on Sov Portal has been successfully approved by our admin team.</p>

    <p>You can now log in and access your agent dashboard to start managing your clients’ study visa applications. Once logged in, you’ll be able to:</p>
    <ul>
      <li>Submit and manage offer letters for your clients</li>
      <li>Submit and manage study visa applications for your clients</li>
      <li>Track the progress of each application</li>
      <li>Access important resources and tools to assist your clients</li>
    </ul>

    <p>If you have any questions or need support, please feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>. We’re here to help you succeed!</p>

    <p>Welcome to the Sov Portal family. We look forward to supporting you in your journey to help students achieve their study abroad dreams.</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Your trusted partner in study visa solutions</p>
  `;
};

export const agentRegistrationRejected = (firstName, rejectionReason) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>Thank you for registering as an agent on Sov Portal. Unfortunately, after reviewing your profile, our admin team was unable to approve your registration at this time.</p>

    <p><strong>Reason for Rejection:</strong></p>
    <p>${rejectionReason}</p>

    <p>You can log in to your account, correct or modify the specific issue, and resubmit your profile for approval.</p>

    <p><strong>Next Steps:</strong></p>
    <ol>
      <li><strong>Log in to the portal:</strong> <a href="https://sovportal.in" target="_blank">sovportal.in</a></li>
      <li><strong>Review and correct:</strong> Update your profile based on the reason mentioned above.</li>
      <li><strong>Resubmit for approval:</strong> Once you’ve made the necessary changes, resubmit your profile for admin review.</li>
    </ol>

    <p>Our team will re-evaluate your submission once the changes have been made. If you need assistance or have any questions regarding the rejection, please reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

    <p>We’re here to support you in successfully completing your registration, and we look forward to working together.</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Helping you succeed in managing your clients’ study visa applications</p>
  `;
};

export const emailChangeOtpTemplate = (firstName, otpCode) => {
  return `
    <p>Dear <strong>${firstName}</strong>,</p>

    <p>We received a request to change the registered email address on your account. To confirm this change, please enter the following One-Time Password (OTP) on the verification page:</p>
    
    <p><strong>Your OTP:</strong> ${otpCode}</p>
    
    <p>This OTP is valid for the next one minute. If you did not request this change, please ignore this email or contact our support team for assistance.</p>
    
    <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

    <p>Thank you for using Sov Portal!</p>

    <p>Best regards,</p>
    <p><strong>Sov Portal</strong><br>
    Supporting you on your study abroad journey</p>
  `;
};


export const courseFeeAgentApplicationRejected = (agentFirstName, rejectionReason, studentName, studentId)=>{
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We regret to inform you that the course fee application for <strong>${studentName}(${studentId})</strong> has been rejected by our admin team.</p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>To proceed, please review the rejection reason, make the necessary adjustments, and resubmit the application for reconsideration.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Log in to the portal</strong></li>
  <li><strong>Modify the application:</strong> Correct the details or provide any additional information as needed.</li>
  <li><strong>Resubmit the application:</strong> Once updated, you can resubmit the course fee application for admin review.</li>
</ul>

<p>If you need assistance or have any questions, please reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your attention to this matter and look forward to assisting you in successfully completing the process on behalf of your student.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you support students in achieving their educational goals

`;
}

export const courseFeeAgentApplicationApproved = (agentFirstName, studentName, studentId) => {
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We are pleased to inform you that the course fee application for <strong>${studentName} (${studentId})</strong> has been approved by our admin team.</p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
</ul>

<p>You can now proceed with the next steps, including notifying the student and arranging the necessary payment on their behalf, if required. Please ensure the payment is made promptly to secure their enrollment.</p>

<p>If you need assistance or have any questions, please reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for your partnership in helping students achieve their educational goals.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Empowering agents to support students on their study abroad journey
</p>`;
};

export const studentCourseFeeApprovedTemp = (firstName)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Congratulations! Your course fee application has been approved by our admin team. You are now one step closer to securing your place in your program.</p>

<p><strong>Next Steps:</strong></p>
<p>To complete your enrollment, please proceed with the payment of the approved course fee. Our payment team will assist you throughout the process to ensure it goes smoothly.</p>

<p><strong>Payment Assistance:</strong></p>
<p>If you have any questions or need support with the payment, please feel free to contact our payment team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We look forward to helping you move forward with your studies. Thank you for choosing SOV Portal as your partner in achieving your educational goals!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting your journey to study abroad</p>
`;
}

export const studentCourseFeeRejectedTemp =  (firstName, rejectionReason)=>{
  
  console.log(rejectionReason, "ppppppp")
     return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We regret to inform you that your course fee application has been rejected by our admin team.</p>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>To proceed, please review the reason provided, make any necessary updates, and resubmit your application for reconsideration. Our team will review it promptly once resubmitted.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Log in to your account</strong></li>
  <li><strong>Review and edit:</strong> Address the issues mentioned in the rejection reason.</li>
  <li><strong>Resubmit the application:</strong> Once updated, please resubmit for further review.</li>
</ul>

<p>If you have any questions or need support with resubmission, feel free to reach out to our support team at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We’re here to help you successfully complete your application and are committed to supporting your educational journey.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Dedicated to helping you achieve your study abroad goals</p>
`
}

export const visaAgentApplicationRejected = (agentFirstName, country, rejectionReason, studentName, studentId)=>{
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We regret to inform you that the visa lodgment application for <strong>${studentName}(${studentId})</strong> for <strong>${country}</strong> has been rejected by our admin team.</p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>To proceed, please review the rejection reason, make the necessary adjustments, and resubmit the application if applicable.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Log in to the portal</strong></li>
  <li><strong>Modify the application: </strong> Address the issues stated in the rejection reason.</li>
  <li><strong>Resubmit the application: </strong> Once updated, you may resubmit the visa lodgment application for further review.</li>
</ul>

<p>If you need any assistance or have questions, feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your attention to this matter and are here to support you in assisting your student.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting agents in helping students achieve their study abroad aspirations.</p>

`;
}

export const visaAgentApplicationApproved = (agentFirstName, country, studentName, studentId) => {
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We are pleased to inform you that the visa lodgment application for <strong>${studentName}(${studentId})</strong> has been approved by our admin team for <strong>${country}</strong></p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p>Please log in to your agent portal to access the approval details and guide the student through the next steps in their visa process.</p>

<p>If you have any questions or require further assistance, don’t hesitate to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for your continued commitment to helping students achieve their study abroad dreams.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Partnering with you to support students’ educational journeys abroad
</p>`;
};

export const studentVisaApprovedTemp = (firstName, country)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>Congratulations! We’re excited to inform you that your visa lodgment application for <strong>${country}</strong> has been approved by our admin team.</p>

<p><strong>Application Details:</strong></p>
<ul>
  <li><strong>Country Applied: </strong>${country}</li>
</ul>
<p>Please check the portal to review the approval details and follow any additional instructions to complete the visa process.</p>

<p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>. Our team is here to support you at every step of your study abroad journey.
</p>

<p>Thank you for choosing Sov Portal as your partner in achieving your educational dreams!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Empowering you on your journey to study abroad</p>
`;
}

export const studentVisaRejectedTemp =  (firstName, country, rejectionReason)=>{
  
  console.log(rejectionReason, "ppppppp")
     return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We regret to inform you that your visa lodgment application for <strong>${country}</strong> has been rejected by our admin team.</p>

<p><strong>Application Details:</strong></p>
<ul>
  <li><strong>Country Applied: </strong>${country}</li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>Please review the reason provided, make the necessary corrections, and resubmit your application for reconsideration.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Access Portal</strong></li>
  <li><strong>Review and modify:</strong> Address the issues mentioned in the rejection reason. </li>
  <li><strong>Resubmit the application:</strong> Once updated, please submit for further review.</li>
</ul>

<p>If you have any questions or need help with resubmission, feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>. We’re here to assist you and support you on your journey to study abroad.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you reach your educational goals abroad</p>
`
}

export const visaAgentEmbassyApplicationRejected = (agentFirstName, country, rejectionReason, studentName, studentId)=>{
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We regret to inform you that the visa application for <strong>${studentName}(${studentId})</strong> has been rejected by the embassy for  <strong>${country}</strong></p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>Please review the rejection details and discuss potential next steps with the student. They may wish to reapply or address the issues mentioned, based on embassy guidelines.</p>

<p><strong>Next Steps:</strong></p>
<ul>
  <li><strong>Log in to the portal</strong></li>
  <li><strong>Modify the application: </strong> Address the issues stated in the rejection reason.</li>
  <li><strong>Resubmit the application: </strong> Once updated, you may resubmit the visa lodgment application for further review.</li>
</ul>

<p>If you need any assistance or additional guidance, please reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your efforts in assisting students with their study abroad journey, and we’re here to support you through the next steps.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you support students’ educational aspirations abroad</p>

`;
}

export const visaAgentEmbassyApplicationApproved = (agentFirstName, country, studentName, studentId) => {
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We’re thrilled to inform you that the visa application for <strong>${studentName}(${studentId})</strong> has been approved by the embassy for <strong>${country}</strong></p>

<p><strong>Student Details:</strong></p>
<ul>
  <li><strong>Student ID:</strong> ${studentId} </li>
  <li><strong>Student Name:</strong> ${studentName} </li>
  <li><strong>Country:</strong> ${country}</li>
</ul>

<p>Please notify the student regarding this exciting development, and proceed with any remaining steps to finalize their preparations for studying abroad.</p>

<p>If you have any questions or require further assistance, feel free to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for your dedication to supporting students in achieving their international education goals.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Your trusted partner in study abroad success
</p>`;
};

export const studentEmbassyVisaApprovedTemp = (firstName, country)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We are thrilled to inform you that your visa application for <strong>${country}</strong> has been approved by the embassy! This is a major step forward in your study abroad journey, and we couldn't be more excited for you.</p>

<p><strong>Application Details:</strong></p>
<ul>
  <li><strong>Country Applied: </strong>${country}</li>
</ul>
<p>Please log in to your account to view the approval details and review any final steps necessary before you embark on this exciting adventure.</p>

<p>If you have any questions or need assistance with your next steps, don’t hesitate to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.
</p>

<p>Congratulations on this achievement, and best of luck with your preparations!</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Supporting you in achieving your global education dreams</p>
`;
}

export const studentEmbassyVisaRejectedTemp =  (firstName, country, rejectionReason)=>{
  
  console.log(rejectionReason, "ppppppp")
     return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We regret to inform you that your visa application for <strong>${country}</strong> has been rejected by the embassy. We understand that this may be disappointing news, and we’re here to support you with any next steps.
</p>

<p><strong>Application Details:</strong></p>
<ul>
  <li><strong>Country Applied: </strong>${country}</li>
</ul>

<p><strong>Reason for Rejection:</strong></p>
<p>${rejectionReason}</p>

<p>To explore your options, please review the reason given and consider any possible adjustments or resubmission guidelines provided by the embassy.</p>

<p>If you have questions or need guidance on reapplying, please don’t hesitate to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We’re here to assist you in navigating this process and finding the best path forward for your study abroad journey.</p>

<p>Best regards,</p>
<p><strong>Sov Portal</strong><br>
Helping you achieve your educational goals abroad</p>
`
}

export const agentSideTicketApResolved = (agentFirstName, ticketPriority, ticktType, ticketSolution) => {
  return `<p>Dear <strong>${agentFirstName}</strong>,</p>

<p>We’re pleased to inform you that the ticket you raised has been successfully resolved. Please find the details and solution below:</p>

<p><strong>Ticket Details:</strong></p>
<ul>
  <li><strong>Ticket Type:</strong> ${ticktType} </li>
  <li><strong>Priority:</strong> ${ticketPriority} </li>
</ul>

<p><strong>Ticket Solution:</strong></p>
<p>${ticketSolution}</p>

<p>If you have any further questions or if there’s anything else we can assist you with, please don’t hesitate to reach out at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for your patience, and we’re here to support you in helping your students reach their educational goals!</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Helping you deliver a seamless study abroad experience
</p>`;
};

export const studentSideTicketResolved = (firstName, ticketPriority, ticktType, ticketSolution)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We’re reaching out to let you know that the support ticket you submitted has been successfully resolved. Please find the details and solution below:</p>

<p><strong>Ticket Details:</strong></p>
<ul>
  <li><strong>Ticket Type:</strong> ${ticktType} </li>
  <li><strong>Priority:</strong> ${ticketPriority} </li>
</ul>

<p><strong>Ticket Solution:</strong></p>
<p>${ticketSolution}</p>

<p>If you have any additional questions or need further assistance, please don’t hesitate to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>. We’re here to ensure you have a smooth experience as you pursue your educational goals.</p>

<p>Thank you for your patience and trust in us.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Committed to supporting your journey to study abroad
</p>`;
}

export const changeRegisteredEmail = (firstName, email)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We are writing to confirm that your registered Email id has been successfully updated in our system.</p>

<p><strong>Updated Details:</strong></p>
<ul>
  <li><strong>New Registered Email Id:</strong> ${email} </li>
</ul>

<p>If you did not request this change or believe this update was made in error, please contact our support team immediately at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>Thank you for keeping your information up to date. If you have any further questions, feel free to reach out to us.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Ensuring a secure and seamless experience
</p>`;
}

export const changeRegisteredPassword = (firstName)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We’re writing to confirm that your password has been successfully updated on the portal.</p>

<p>If you did not request this change or believe this action was unauthorised, please contact us immediately at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>For security, ensure your new password is strong and not shared with anyone.</p>
<p>Thank you for using SOV Portal</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Dedicated to supporting your educational journey
</p>`;
}

export const accountDeletedSuccessfully = (firstName, userId)=>{
  return `<p>Dear <strong>${firstName}</strong>,</p>

<p>We regret to inform you that your account on the portal has been deleted. As a result, you will no longer be able to access the portal or its features.</p>

<p><strong>Account Details:</strong></p>
<ul>
<li><strong>Name:</strong> ${firstName} </li>
<li><strong>User ID:</strong> ${userId} </li>
</ul>
<p>If you believe this was done in error or wish to regain access, you may request approval to reactivate your account.</p>

<p><strong>To Request Approval:</strong></p>
<ul>
<li><strong>Log in to the portal with your existing credentials:</strong> <a href="https://sovportal.in/login">https://sovportal.in/login</a> </li>
<li>Submit a reactivation request to the admin team.</li>
</ul>

<p>For further assistance, feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a>.</p>

<p>We appreciate your understanding and cooperation.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Helping you stay connected to your goals
</p>`;
}

export const approvalRequestAgent = ( agentName, agentId )=>{
  return `<p>Dear <strong>Admin</strong>,</p>

<p>We would like to inform you that a new registration has been completed by <strong>${agentName}</strong>. The registration details are now pending your approval before the student or Agent can access their dashboard.</p>

<p><strong>Registration Details:</strong></p>
<ul>
<li><strong>Agent Name:</strong> ${agentName} </li>
<li><strong>Agent ID:</strong> ${agentId} </li>
</ul>
<p>Please review the registration and approve or reject it as appropriate. Once approved, the student or Agent will be granted access to their dashboard.</p>

<p>Thank you for your prompt attention to this registration.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
</p>`;
}

export const approvalRequestStudent = ( studentName, studentId )=>{
  return `<p>Dear <strong>Admin</strong>,</p>

<p>We would like to inform you that a new registration has been completed by <strong>${studentName}</strong>. The registration details are now pending your approval before the student or Agent can access their dashboard.</p>

<p><strong>Registration Details:</strong></p>
<ul>
<li><strong>Student Name:</strong> ${studentName} </li>
<li><strong>Student ID:</strong> ${studentId} </li>
</ul>
<p>Please review the registration and approve or reject it as appropriate. Once approved, the student or Agent will be granted access to their dashboard.</p>

<p>Thank you for your prompt attention to this registration.</p>

<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
</p>`;
}

export const accountCredentialsTeam = (teamMemId, teamMemName, emailId, password, portalLink )=>{
  return `<p>Dear <strong>${teamMemName}</strong>,</p>

<p>We’re excited to welcome you to the portal team! Your account has been created by the Super Admin, and you are now equipped to handle all portal-related tasks on their behalf.</p>
<p>Please find your account details below:</p>

<p><strong>Account Details:</strong></p>
<ul>
<li><strong>Team Member ID:</strong> ${teamMemId} </li>
<li><strong>Name:</strong> ${teamMemName} </li>
<li><strong>Email ID:</strong> ${emailId} </li>
<li><strong>Password:</strong> ${password} </li>
<li><strong>Portal Link:</strong> ${portalLink} </li>
</ul>
<p>You can log in using the credentials provided above to start managing tasks and taking actions on behalf of the Super Admin. </p>

<p><strong>Important Notes:</strong></p>
<ul>
<li>Ensure all actions comply with the guidelines provided by the Super Admin</li>
</ul>

<p>For any further assistance, feel free to reach out to <a href="mailto:shweta.dhanerwal@sovportal.in">shweta.dhanerwal@sovportal.in</a> or <a href="mailto:jatin.mehta@sovportal.in">jatin.mehta@sovportal.in</a>.</p>

<p>Thank you for being a valuable part of our team!</p>
<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Supporting seamless operations for the portal
</p>`;
}


export const accountUpdatedTeam = (teamMemId, teamMemName, emailId, password, portalLink )=>{

  const passwordItem = password ? `<li><strong>Password:</strong> ${password}</li>
  <li><strong>Portal Link:</strong> ${portalLink} </li>` : `<li><strong>Portal Link:</strong> ${portalLink} </li>`;
  return `<p>Dear <strong>${teamMemName}</strong>,</p>

<p>Your account has been updated by the Super Admin, and you are now equipped to handle all portal-related tasks on their behalf.</p>
<p>Please find your updated account details below:</p>

<p><strong>Account Details:</strong></p>
<ul>
<li><strong>Team Member ID:</strong> ${teamMemId} </li>
<li><strong>Name:</strong> ${teamMemName} </li>
<li><strong>Email ID:</strong> ${emailId} </li>
${passwordItem}
</ul>
<p>You can log in using the credentials provided above to start managing tasks and taking actions on behalf of the Super Admin. </p>

<p><strong>Important Notes:</strong></p>
<ul>
<li>Ensure all actions comply with the guidelines provided by the Super Admin</li>
</ul>

<p>For any further assistance, feel free to reach out to <a href="mailto:shweta.dhanerwal@sovportal.in">shweta.dhanerwal@sovportal.in</a> or <a href="mailto:jatin.mehta@sovportal.in">jatin.mehta@sovportal.in</a>.</p>

<p>Thank you for being a valuable part of our team!</p>
<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Supporting seamless operations for the portal
</p>`;
}


export const withdrawalSuccessfulStudent = ( studentName, purpose )=>{
  return `<p>Dear <strong>${studentName}</strong>,</p>

<p>We’re happy to inform you that the withdrawal payment you requested has been successfully transferred to your registered bank account. Below are the details of the transaction:</p>


<p><strong>Transaction Details:</strong></p>
<ul>
<li><strong>Purpose:</strong> ${purpose} </li>
</ul>

<p>Please check your bank account to verify the transaction. If you experience any issues or have further questions, feel free to reach out to us at <a href="mailto:support@sovportal.in">support@sovportal.in</a></p>

<p>Thank you for choosing us to assist with your study abroad journey.</p>
<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Supporting your journey with ease.
</p>`;
}

export const withdrawalSuccessfulAgent = ( agentName, studentName, studentId, purpose )=>{
  return `<p>Dear <strong>${agentName}</strong>,</p>

<p>We’re pleased to inform you that the withdrawal payment  you requested has been successfully transferred to a student registered bank account. Below are the details of the transaction:</p>


<p><strong>Transaction Details:</strong></p>
<ul>
<li><strong>Student ID:</strong> ${studentId} </li>
<li><strong>Student Name:</strong> ${studentName} </li>
<li><strong>Purpose:</strong> ${purpose} </li>
</ul>
<p>Please verify the payment in your account and let us know if you encounter any issues.</p>

<p><strong>Important Notes:</strong></p>
<ul>
<li>Ensure all actions comply with the guidelines provided by the Super Admin</li>
</ul>

<p>If you have any questions or require further assistance, feel free to contact us at <a href="mailto:support@sovportal.in">support@sovportal.in</a></p>

<p>Thank you for your continued partnership!</p>
<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Supporting your journey with ease
</p>`;
}

export const withdrawalRequestAdmin = (studentName, studentId, purpose )=>{
  return `<p>Dear <strong>Admin</strong>,</p>

<p>This is to notify you that a withdrawal request has been submitted by a user for processing. Please find the details of the request below:</p>


<p><strong>Withdrawal Request Details:</strong></p>
<ul>
<li><strong>Student ID:</strong> ${studentId} </li>
<li><strong>Student Name:</strong> ${studentName} </li>
<li><strong>Purpose:</strong> ${purpose} </li>
</ul>

<p>Please log in to the admin portal to review and process this request accordingly.</p>

<p>If you have any questions or need further clarification, feel free to reach out to the user.</p>


<p>Thank you for your prompt attention to this request.</p>
<p>Best regards,</p>
<p><strong>SOV Portal</strong><br>
Facilitating seamless financial transactions.
</p>`;
}
// =============================


