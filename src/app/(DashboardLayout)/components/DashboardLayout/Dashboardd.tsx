import { useAuth } from "@/contexts/JWTContext/AuthContext.provider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PageContainer from "../container/PageContainer";
import DashboardNew from "../shared/DashboardNew";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import DashboardBox from "../dashboard/DashboardBox";
import SubtitlesOffIcon from "@mui/icons-material/SubtitlesOff";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import { ChartView } from "./Chart";
import { BACKEND_BASE_URL } from "@/config";

const Dashboardd = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  const auth: any = useAuth();
  const role = auth?.user?.data?.user?.role?.name;

  const [rows, setRows] = React.useState<any>([]);
  const [eme, setEme] = useState<any>([]);
  const [billNo, setBillNo] = useState<any>([]);
  const [diaryNo, setDiaryNo] = useState<any>([]);
  const [chartData, setChartData] = useState<any>({});

  const [NumofClaim, setNumOfClaim] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_BASE_URL}/api/medical/getAllDakEntry`
        );

        const emeData = res?.data?.data?.filter(
          (e: any) => e.emergency === "yes"
        );
        const billNoData = res?.data?.data?.filter((e: any) =>
          e.hasOwnProperty("bill_No")
        );
        const diaryNoData = res?.data?.data?.filter((e: any) =>
          e.hasOwnProperty("diary_No")
        );

        setRows(res.data.data);
        setEme(emeData);
        setBillNo(billNoData);
        setDiaryNo(diaryNoData);

        // Example chart data - Replace with your data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const NumOfClaimsApproved: number = Number(rows?.length + 1);
  const NumOfEmergency: number = Number(eme.length + 1);

  const totalFile = Number(diaryNo.length + 1);
  const completedFiles = Number(billNo.length + 1);

  const pendingFiles = totalFile - completedFiles;

  return (
    <PageContainer
      title="Welcome to Employee Dashboard"
      description="You can navigate the website from here"
    >
      <DashboardNew title=" Dashboard" titleVariant="h5">
        <Grid sx={{ margin: "10px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              bgcolor: "background.paper",
              borderRadius: 1,
              marginTop: "20px",
            }}
          >
            <DashboardBox
              filecount={completedFiles}
              filetype="Total Claim Approved"
              iconcolor="#fa5c80"
              backgroundcolor="#ffe2e6"
              Icon={PostAddIcon}
            />
            <DashboardBox
              filecount={NumOfEmergency}
              filetype="Emergency Cases"
              iconcolor="#fe987f"
              backgroundcolor="#fff4de"
              Icon={PendingActionsIcon}
            />
            <DashboardBox
              filecount={totalFile}
              filetype="Number Of Claims"
              iconcolor="#3cd755"
              backgroundcolor="#dcfce7"
              Icon={SubtitlesOffIcon}
            />
            <DashboardBox
              filecount={pendingFiles}
              filetype="Pending Files"
              iconcolor="#bf83ff"
              backgroundcolor="#f4e8ff"
              Icon={AccountBalanceIcon}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "16px", mt: 4 }}>
              Chart Title
            </Typography>

            <ChartView
              chartSeries={[
                {
                  name: "Total File",
                  // data: [
                  //   completedFiles,
                  //   NumOfEmergency,
                  //   pendingFiles,
                  //   totalFile,
                  // ],
                  data: [120, 50, 70, 300],
                },
              ]}
              sx={{ height: "100%", width: "70%" }}
            />
          </Box>
        </Grid>
      </DashboardNew>
    </PageContainer>
  );
};

export default Dashboardd;
