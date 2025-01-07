import { drawerWidth } from "@/app/constants/global-data";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Typography>Menu Item 1</Typography>
        <Typography>Menu Item 2</Typography>
      </Box>
    </Drawer>
  );
}
