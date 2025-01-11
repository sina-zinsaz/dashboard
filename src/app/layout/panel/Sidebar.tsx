import { drawerWidth } from "@/app/constants/global-data";
import { menu } from "@/app/constants/menu";
import { Box, Drawer, Link, Typography } from "@mui/material";

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
      <Box display='flex' justifyContent='center' my={1.5}>
        <Typography variant="h4" fontWeight='bold'>Sina Zinsaz</Typography>
      </Box>
      <Box sx={{ overflow: "auto" }}>
      {menu.map((item, index) => (
          <Link key={index} href={item.link} sx={{textDecoration:'none' , color:'black'}}> 
              <Typography
                  fontWeight="bold"
                  fontSize="1.2rem"
                  ml={2}
                  mb={1}
                  sx={{ cursor: 'pointer' , textDecoration: 'none' }}
              >
                  {item.title}
              </Typography>
          </Link>
      ))}
      </Box>
    </Drawer>
  );
}
