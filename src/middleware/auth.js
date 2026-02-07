import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.split(" ")[1] : null;

  if (!token) return res.status(401).json(new ApiResponse(401, {}, "No token"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json( new ApiResponse(401, {}, "Invalid token"));
  }
}

export default auth;
