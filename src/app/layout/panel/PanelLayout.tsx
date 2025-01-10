import { Suspense } from "react";
import { Container, Stack } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "@mui/icons-material";

export default function PanelLayout() {
  return (
    <>
      <Stack direction="row">
        <Sidebar />

        <div style={{ flexGrow: 1, overflow: "hidden" }}>
          <Stack
            alignItems="center"
            sx={{ pt: { xs: 2, md: 0 }, pb: 2, height: "100%" }}
          >
            <Header />

            <Container maxWidth="xl" sx={{ height: "100%" }}>
              <Suspense fallback={<></>}>
                <Outlet />
              </Suspense>
            </Container>
          </Stack>
        </div>
      </Stack>
    </>
  );
}
