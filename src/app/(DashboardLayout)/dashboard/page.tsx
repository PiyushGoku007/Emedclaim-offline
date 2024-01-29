"use client";
import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import * as React from "react";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/JWTContext/AuthContext.provider";

import Dashboardd from "../components/DashboardLayout/Dashboardd";

import axios from "axios";
const Dashboard = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  const auth: any = useAuth();
  const router: any = useRouter();
  const role = auth?.user?.data?.user?.role?.name;

  useEffect(() => {
    if (!auth.user) router.push("/");
  }, [auth?.user, router]);

  return (
    <>
      <Dashboardd />
    </>
  );
};

export default Dashboard;
