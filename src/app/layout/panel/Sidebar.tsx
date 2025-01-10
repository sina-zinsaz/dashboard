import { drawerWidth } from "@/app/constants/global-data";
import { menu } from "@/app/constants/menu";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";

export default function Sidebar() {
  console.log(menu);
  
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
        {menu.map((item , index) => (
        <Typography key={index} >{item}</Typography>
      ))}
      </Box>
    </Drawer>
  );
}
