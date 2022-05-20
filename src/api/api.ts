import axios from "axios";
import {
  IAuthFormValues,
  IAuthLoginData,
  IAuthLogoutData,
  IAuthMeData,
} from "../types/authTypes";
import {
  IProfileAvatarData,
  IProfileData,
  IProfileStatusData,
} from "../types/profilePageTypes";
import { IFollowingData, IUsersData } from "../types/usersPageTypes";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "96b67026-4ab3-4201-9825-691e2bf799c2",
  },
});

export const authApi = {
  authMe() {
    return instance.get<IAuthMeData>("auth/me");
  },
  login(values: IAuthFormValues) {
    return instance.post<IAuthLoginData>("auth/login", values);
  },
  logout() {
    return instance.delete<IAuthLogoutData>("auth/login");
  },
};

export const securityApi = {
  fetchCaptchaUrl() {
    return instance.get<{ url: string }>("security/get-captcha-url");
  },
};

export const profilePageApi = {
  fetchProfile(userId: string | undefined) {
    return instance.get<IProfileData>(`profile/${userId}`);
  },
  fetchStatus(userId: string | undefined) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<IProfileStatusData>("profile/status", { status });
  },
  updateAvatar(avatarFile: File) {
    const formData = new FormData();
    formData.append("image", avatarFile);

    return instance.put<IProfileAvatarData>("profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const usersPageApi = {
  fetchUsers(currentPage: number, pageSize: number) {
    return instance.get<IUsersData>(
      `users?page=${currentPage}&count=${pageSize}`
    );
  },
  follow(userId: number) {
    return instance.post<IFollowingData>(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete<IFollowingData>(`follow/${userId}`);
  },
};
