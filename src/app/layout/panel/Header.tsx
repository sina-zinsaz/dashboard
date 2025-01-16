import { drawerWidth } from "@/app/constants/global-data";
import { Toolbar, Typography, AppBar } from "@mui/material";
import ThemeToggleButton from '../../components/ThemeToggleButton';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <ThemeToggleButton />

      </Toolbar>
    </AppBar>
  );
}
