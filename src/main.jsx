import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import {
  createReactRouterV6Options,
  FaroRoutes,
  getWebInstrumentations,
  initializeFaro,
  ReactIntegration,
  ReactRouterVersion,
  FaroErrorBoundary,
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

import "./assets/styles/global.css";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { Route } from "react-router-dom";

// Initialize Faro BEFORE rendering your App component
initializeFaro({
  url: "https://faro-collector-prod-ap-south-1.grafana.net/collect/45bb8df14e79ffb1409fbcddc6836e82",
  app: {
    name: "ali.viation",
    version: "1.0.0",
    environment: "production",
  },

  instrumentations: [
    // Load the default Web instrumentations
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    new ReactIntegration({
      router: createReactRouterV6Options({
        createRoutesFromChildren,
        matchRoutes,
        Routes,
        useLocation,
        useNavigationType,
      }),
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FaroErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <FaroRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/skills/" element={<Skills />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/blogs/">
            <Route index element={<Blogs />} />
          </Route>
        </FaroRoutes>
      </BrowserRouter>
    </FaroErrorBoundary>
  </React.StrictMode>
);
