export function generateOtp() {
    // Generate a random 4-digit number between 1000 and 9999
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString(); // Return as a string if needed
  }
  export function getFirstWord(str) {
    return str.split(" ")[0] || ""; 
  }
  
  