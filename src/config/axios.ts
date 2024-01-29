import axios, { InternalAxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // You can add additional request logic here
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const router = useRouter();

    if (error.response?.status === 500) {
      // Redirect to an error page using Next.js router
      router.push("/error");
    }

    console.error("Response error:", error);

    // Return a more detailed error object or handle different status codes
    return Promise.reject(error.response?.data || "Something went wrong");
  }
);

export default axiosInstance;
