"use client";

import { drawerWidth } from "@/app/constants/global-data";
import { menu } from "@/app/constants/menu";
import { Box, Drawer, IconButton, Link, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const collapsedWidth = 60; // عرض سایدبار در حالت کوچک‌شده

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxSizing: "border-box",
          },
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
          my={1.5}
        >
          {open && (
            <Typography variant="h6" fontWeight="bold" noWrap>
              Sina Zinsaz
            </Typography>
          )}
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        {/* Menu Items */}
        <Box sx={{ overflow: "auto" }}>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: open ? "flex-start" : "center",
                mb: 2,
                px: 2,
              }}
            >
              <item.icon />
              {open && (
                <Typography
                  fontWeight="bold"
                  fontSize="1rem"
                  ml={1}
                  sx={{ cursor: "pointer" }}
                >
                  {item.title}
                </Typography>
              )}
            </Link>
          ))}
        </Box>
      </Drawer>
  );
}
