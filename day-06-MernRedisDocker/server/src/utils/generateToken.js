import jwt from "jsonwebtoken";

export const genToken = (id, key) => {
  try {
    const token = jwt.sign({ id }, key, {
      algorithm: "HS256",
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    console.log("Error from GenToken", error.message);
  }
};
