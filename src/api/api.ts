import axios from "axios";
import {
  IAuthFormValues,
  IAuthLoginData,
  IAuthLogoutData,
  IAuthMeData,
} from "../types/authTypes";
import { IProfileData } from "../types/profileTypes";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const authApi = {
  me() {
    return instance.get<IAuthMeData>("auth/me");
  },
  login(values: IAuthFormValues) {
    return instance.post<IAuthLoginData>("auth/login", values);
  },
  logout() {
    return instance.delete<IAuthLogoutData>("auth/login");
  },
};

export const profileApi = {
  fetchProfile(userId: string | undefined) {
    return instance.get<IProfileData>(`profile/${userId}`);
  },
};
