import { Routes } from "@generouted/react-router";
import 'github-markdown-css';
import posthog from "posthog-js";
import { createRoot } from "react-dom/client";
import "./index.css";

if (import.meta.env.PROD) {
  posthog.init("phc_tMmrXT6no3yjuWJ24hnibPvFgYmgGvQW5UfLqTiJCCwL", {
    api_host: "https://us.i.posthog.com",
    defaults: "2025-05-24",
    capture_pageview: "history_change",
    person_profiles: "identified_only",
  });
}

createRoot(document.getElementById("root")!).render(<Routes />);
