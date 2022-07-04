import axios from "axios";
import { LoginDto, SignupDto } from "../utils/types/auth";

axios.defaults.baseURL = "http://localhost:5000";
export const signup = (signupDto: SignupDto) =>
  axios.post("/auth/signup", signupDto);
export const login = (loginDto: LoginDto) =>
  axios.post("/auth/login", loginDto);
