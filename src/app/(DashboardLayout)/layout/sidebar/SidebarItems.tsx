import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { useAuth } from "@/contexts/JWTContext/AuthContext.provider";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const auth: any = useAuth();
  const role: any = auth?.user?.data?.user?.role?.name;

  const pathname = usePathname();
  const pathDirect = pathname;
  const allData = Menuitems[role];

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {allData?.map((item: any) =>
          item.subheader ? (
            <NavGroup item={item} key={item.subheader} />
          ) : (
            <NavItem
              item={item}
              key={item.id}
              pathDirect={pathDirect}
              onClick={toggleMobileSidebar}
            />
          )
        )}
      </List>
    </Box>
  );
};

export default SidebarItems;
