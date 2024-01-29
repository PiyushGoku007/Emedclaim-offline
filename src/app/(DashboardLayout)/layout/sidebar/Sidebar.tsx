import { useMediaQuery, Box, Drawer, Typography } from "@mui/material";
import Logo from "../../../../../public/GovLogo__2_.png";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
import { useAuth } from "@/contexts/JWTContext/AuthContext.provider";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const auth = useAuth();
  const sidebarWidth = "270px";

  const role: any = auth.user?.data?.user?.role?.name;

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              backgroundColor: "#444054",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box textAlign={"center"} marginY={2} px={3}>
              <Box>
                <img src={`${Logo.src}`} height={70} width={60} alt="" />
              </Box>
              <Typography variant="body2"></Typography>
              <Typography my={1} variant="h4" color="#ffffff">
                E-Medical Claim
              </Typography>

              <Box>
                <span style={{ color: "#ffffff" }}>You Logged In as:</span>{" "}
                <br /> <b style={{ color: "#ffffff" }}>{role}</b>
                <Typography
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "40%",
                    margin: "auto",
                  }}
                >
                  {/* {role && role} */}
                </Typography>
              </Box>
            </Box>
            <Box>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>{/* <Logo /> */}</Box>

      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
