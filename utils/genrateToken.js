import jwt from "jsonwebtoken";

export const generateTokens = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  // Generate the access token
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });


  // Generate the refresh token
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });

  return { accessToken, refreshToken };
};
