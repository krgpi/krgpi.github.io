import React from "react";
import { Outlet } from "react-router-dom";
import TheFooter from "../_components/TheFooter";
import TheHeader from "../_components/TheHeader";

const App: React.FC = () => {
  return (
    <section className="bg-krg-bg-gray flex flex-col h-screen justify-between">
      <TheHeader />
      <main className="mb-auto">
        <Outlet />
      </main>
      <TheFooter />
    </section>
  );
};

export default App;
