import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider  router={router} />
    </MantineProvider>
  </StrictMode>
);
