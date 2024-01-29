"use client";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/navigation";
import GovLogo from "../../../../public/GovLogo__2_.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/JWTContext/AuthContext.provider";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
  styled,
} from "@mui/material";
// import router from "next/router";
import React from "react";
import Banner from "Banner.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Image from "next/image";
// import Forgot from "./Forgot";

// const passwordValidationRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const emailValidationRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const mobileValidationRegex =
  /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/;
// const otrValidationRegex = '';

function Login() {
  const auth = useAuth();
  const router = useRouter();
  const [email_id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [open, setOpen] = React.useState(false);
  const [successLogin, setSuccessLogin] = React.useState(false);
  const [tryagain, setTryagain] = useState<any>(false);
  const [tryagaincaptcha, setTryagaincaptcha] = useState<any>(false);

  // const randomCapcha: string = Math.random().toString(30).substr(2, 7);

  // console.log(randomCapcha, "CAPCHA");
  const [capchaCode, SetCapchaCode] = useState<any>("");
  const [inputCapcha, setInputCapcha] = useState<any>("");

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // const handleLogin = async () => {
  //   await auth.signIn(email, password);
  // };

  // useEffect(() => {
  //   // Client-side code here
  //   console.log("handling hydration error");
  // }, [email_id, password, showPassword, capchaCode, tryagain, inputCapcha]);

  const handleLogin = async () => {
    if (!emailValidationRegex.test(email_id) || password.trim() === "") {
      setError(true);
      setOpen(true);
      return;
    }
    if (inputCapcha !== capchaCode) {
      refreshCapcha();
      setTryagaincaptcha(true);
      return setOpen(true);
    } else {
      setTryagaincaptcha(false);
    }

    const authData = await auth.signIn(email_id, password);

    if (authData) {
      setError(true);
      setTryagain(true);
    } else {
      setError(false);
      setOpen(false);

      setSuccessLogin(true);
    }
  };

  const Heading1 = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: "black",
    fontFamily: "Nunito, sans-serif",
    // fontSize: "22.26px",
    lineHeight: "41.72px",
    fontWeight: 700,
  }));

  const LoginButton = styled(Button)`
    width: auto;
    height: auto;

    background: #e15a11;
    font-weight: 600;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    box-shadow: 0px 0px 19px -10px rgba(215, 215, 215, 0.25);
    color: white;
    &:hover {
      background-color: #e15a11;
    }
  `;
  const SBox = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;

    & > div,
    & > button,
    & > p {
      margin-top: 10px;
    }
    padding: 20px;
  `;

  const ResendOTP = styled(Typography)`
    width: 150px;
    height: 22px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #1e88e5;
    cursor: pointer;
    margin: auto;
    text-align: center;
    justify-content: center;
  `;

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const refreshCapcha = () => {
    SetCapchaCode(Math.random().toString(30).substr(2, 5));
  };
  useEffect(() => {
    SetCapchaCode(Math.random().toString(30).substr(2, 5));
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",

          width: "auto",
          height: "100vh",
          top: "4px",
          backgroundImage: `url(/Banner.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            background: "#000000b3",
            width: "auto",
            height: "100vh",
            top: "0",
            left: "0",
            borderRadius: "0",
            color: "#ffffff",
            padding: "40px",
            zIndex: "777",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={GovLogo} width={50} height={70} alt={""} />
          </Box>

          <Box
            sx={{
              // flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Heading1
              sx={{
                color: "#fff900",
                lineHeight: "28px",
                fontSize: {
                  xs: "11.26",
                  sm: "11.26",
                  md: "15.26px",
                  lg: "17.26px",
                  xl: "17.26px",
                },
              }}
            >
              UNION PUBLIC SERVICE COMMISSION
            </Heading1>
          </Box>
          <Typography
            sx={{
              letterSpacing: "0em",
              textAlign: "center",
              lineHeight: "30px",

              justifyContent: "center",
            }}
          >
            (E - MEDICAL CLAIM)
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography
              variant="h1"
              //sx={{fontSize:"14.22px",color:"#e15a11",fontWeight:"700"}}
              sx={{
                fontFamily: "Nunito",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "7px",
                mb: 2,
                color: "#fff900",
              }}
            >
              User Login
            </Typography> */}
          </Box>

          <Box>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "24px",
                mt: 1,
                fontSize: {
                  xs: "11.26",
                  // sm: "11.26
                  md: "12.26px",
                  // lg: "19.26px",
                  // xl: "19.26px",
                },
              }}
            >
              Email Id
            </Typography>
            <TextField
              // id="outlined-basic"
              placeholder="Email"
              size="small"
              value={email_id}
              sx={{ borderRadius: "4px", width: "100%" }}
              inputProps={{
                sx: {
                  height: "9px",
                  background: "white",
                  borderRadius: "4px",
                  fontSize: "12px !important",
                },
              }}
              onInput={(event: any) => setId(event.target.value)}
            />

            <Typography
              variant="body1"
              sx={{
                lineHeight: "24px",
                mt: 1,
                fontSize: {
                  xs: "11.26",
                  md: "12.26px",
                },
              }}
            >
              Password
            </Typography>

            <OutlinedInput
              // id="outlined-adornment-weight"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              size="small"
              value={password}
              sx={{
                width: "100%",
                background: "white",
                marginBottom: "8px",
                fontSize: "12px !important",
                height: "27px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Typography
              variant="body1"
              sx={{
                lineHeight: "24px",

                fontSize: {
                  xs: "11.26",
                  md: "12.26px",
                },
              }}
            >
              Validate Captcha
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: 0,
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <TextField
                placeholder="Enter Captcha"
                sx={{ borderRadius: "4px", width: "80%" }}
                size="small"
                inputProps={{
                  maxLength: 8,
                  sx: {
                    height: "9px",
                    background: "white",
                    borderRadius: "4px",
                    fontSize: "12px !important",
                  },
                }}
                onKeyDown={handleKeyPress}
                onChange={(e: any) => setInputCapcha(e.target.value)}
              />
              <p
                style={{
                  color: "rgb(7,8,11)",
                  userSelect: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "2px",
                  width: "60%",
                  backgroundColor: "rgb(255,255,255)",
                  textAlign: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  marginLeft: "5px",
                }}
              >
                {capchaCode}
              </p>
              <Button
                onClick={refreshCapcha}
                startIcon={<RefreshIcon sx={{ color: "#fff900" }} />}
              ></Button>
            </Box>

            <LoginButton
              onClick={handleLogin}
              size="small"
              sx={{ fontSize: "15px", py: 1, width: "100%", mt: 2 }}
            >
              Login
            </LoginButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "auto",
                color: "#ffffff",
              }}
            >
              <ResendOTP
                sx={{
                  color: "#ffffff",
                  fontSize: "12px",
                  textDecoration: "none",
                  mt: 2,
                }}
                variant="body1"
                onClick={() => {
                  router.push("/forgot");
                }}
              >
                Forgot Password ?
              </ResendOTP>
            </Box>
          </Box>
          {error && (
            <Typography
              sx={{
                display: "flex",

                textAlign: "center",
                color: "red",
                fontWeight: "800",
              }}
            >
              Invalid Email or Password, Please try again
            </Typography>
          )}

          {tryagaincaptcha && (
            <Typography
              sx={{
                display: "flex",

                textAlign: "center",
                color: "red",
                fontWeight: "800",
              }}
            >
              Invalid Captcha, Please try again
            </Typography>
          )}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {tryagaincaptcha
                ? "Invalid Captcha, Please try again"
                : " Invalid Email or Password, Please try again"}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
    // <Box>
    //   <Forgot/>
    // </Box>
  );
}

export default Login;
