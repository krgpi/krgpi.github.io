import React from "react";
import { Outlet } from "react-router-dom";
import TheHeader from "../_components/TheHeader";

const App: React.FC = () => {
  return (
    <section className="bg-krg-bg-gray">
      <main>
        <TheHeader />
        <Outlet />
      </main>
    </section>
  );
};

export default App;
