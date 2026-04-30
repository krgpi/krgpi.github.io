import type React from "react";
import { Navigate } from "react-router";

const Component: React.FC = () => (
  <Navigate to="/releases/deskstick" replace />
);

export default Component;
