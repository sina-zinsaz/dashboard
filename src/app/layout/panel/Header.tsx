import { drawerWidth } from "@/app/constants/global-data";
import { Toolbar, Typography, AppBar, Box } from "@mui/material";
import ThemeToggleButton from "../../components/ThemeToggleButton";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#0B1437",
      }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
