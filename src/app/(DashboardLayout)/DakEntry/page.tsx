"use client";
import {
  Box,
  Grid,
  Typography,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import DashboardCard from "../components/shared/DashboardCard";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import EditNoteIcon from "@mui/icons-material/EditNote";
import axios from "axios";
import { useAuth } from "@/contexts/JWTContext/AuthContext.provider";
import { numStyle, Asterisk, onKeyDown } from "../components/StylesnS";
import axiosApi from "@/utils/axiosApi";
import { BACKEND_BASE_URL } from "@/config";
import toast, { Toaster } from "react-hot-toast";
const DakEntry = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  const auth: any = useAuth();

  const [editMode, seEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<any>([]);
  const [formData, setFormData] = useState({
    name: "",
    diary_No: "",
    amount_Claimed: "",
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S.no.",
      maxWidth: 50,
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "diary_No",
      headerName: "Diary Number",
      minWidth: 50,
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Name & Designation",
      minWidth: 130,
    },
    {
      field: "amount_Claimed",
      headerClassName: "super-app-theme--header",
      flex: 1,
      headerName: "Claimed Amount",
      minWidth: 130,
    },
    {
      field: "edit",
      headerName: "Edit",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      maxWidth: 90,
      flex: 1,
      renderCell: (params) => {
        const handleClick = () => {
          seEditMode(true);
          setFormData({
            name: params.row.name,
            diary_No: params.row.diary_No,
            amount_Claimed: params.row.amount_Claimed,
          });
        };

        return (
          <>
            <Button
              title="edit"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <EditNoteIcon />
            </Button>
          </>
        );
      },
    },
  ];
  const notify = () => toast("Data Entry Succuss");
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      if (editMode) {
        const res = await axios.put(
          `${BACKEND_BASE_URL}/api/medical/updateDakEntry`,
          formData,
          {
            headers: {
              authorization: `Bearer ${auth?.user?.token}`,
            },
          }
        );

        if (res) {
          toast.success("Data Edit successful!");
        }
        setFormData({ name: "", diary_No: "", amount_Claimed: "" });
      } else {
        const res = await axios.post(
          `${BACKEND_BASE_URL}/api/medical/createDakEntry`,
          formData,
          {
            headers: {
              authorization: `Bearer ${auth?.user?.token}`,
            },
          }
        );
        if (res) {
          toast.success("Data entry successful!");
        }
      }
      setOpen(true);

      getData();
      setFormData({
        name: "",
        diary_No: "",
        amount_Claimed: "",
      });
    } catch (err: any) {
      alert(err.response.data.message);
    }

    if (editMode) seEditMode(false);
  };

  const getData = async () => {
    // const config = {
    //   url: "/api/medical/getAllDakEntry",
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // authorization: `Bearer ${auth.user.token}`,
    //   },
    // };

    const res: any = await axios.get(
      `${BACKEND_BASE_URL}/api/medical/getAllDakEntry`
    );
    const reqRes = res.data.data.filter(
      (item: any) =>
        !item.forward_By_Assistant_Diary_Entry && !item.returnFromReimbursement
    );
    const rowData = reqRes.map((item: any, index: number) => ({
      ...item,
      id: index + 1,
    }));
    setRows(rowData);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    // Regular expression to match only alphanumeric characters
    const alphanumericRegex = /^[a-zA-Z0-9/]+$/;
    if (alphanumericRegex.test(value) || value === "") {
      setFormData({ ...formData, diary_No: value });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DashboardCard title={"Dak Entry"}>
        <>
          <Grid container spacing={5} mb={2}>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                mb="5px"
              >
                Diary Number
              </Typography>
              {!editMode && <Asterisk />}
              <CustomTextField
                disabled={editMode}
                value={formData.diary_No}
                onChange={handleChange}
                type="text"
                onKeyDown={onKeyDown}
                sx={numStyle}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                mb="5px"
              >
                Name & Designation
              </Typography>
              <Asterisk />
              <CustomTextField
                value={formData.name}
                onChange={(e: any) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                id="name"
                variant="outlined"
                fullWidth
              />
              {!/^[a-zA-Z(), ]*$/.test(formData.name) && (
                <FormHelperText error> Enter Valid Input </FormHelperText>
              )}
            </Grid>

            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                mb="5px"
              >
                Claimed Amount
              </Typography>
              <Asterisk />
              <CustomTextField
                value={formData.amount_Claimed}
                onChange={(e: any) =>
                  setFormData({ ...formData, amount_Claimed: e.target.value })
                }
                type="number"
                onKeyDown={onKeyDown}
                sx={numStyle}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={2}>
              <Button
                title={editMode ? "Edit" : "Submit"}
                disabled={
                  formData.name === "" ||
                  formData.diary_No === "" ||
                  formData.amount_Claimed === "" ||
                  !/^[a-zA-Z(), ]*$/.test(formData.name)
                }
                variant="contained"
                endIcon={editMode ? <EditNoteIcon /> : <SendIcon />}
                sx={{ marginTop: 3 }}
                onClick={handleSubmit}
              >
                {editMode ? "Edit" : "Submit"}
              </Button>
              <Toaster />
            </Grid>
          </Grid>
          <Box
            sx={{
              "& .super-app-theme--header": {
                backgroundColor: "#bccdfb",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              disableRowSelectionOnClick
            />
          </Box>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default DakEntry;
