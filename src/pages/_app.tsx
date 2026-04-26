import React from "react";
import { Outlet } from "react-router";
import TheFooter from "../_components/TheFooter";
import TheHeader from "../_components/TheHeader";

const App: React.FC = () => {
  return (
    <section className="bg-krg-bg-gray flex flex-col min-h-screen justify-between">
      <TheHeader />
      <main className="mb-auto text-white prose prose-invert max-w-none w-full">
        <Outlet />
      </main>
      <TheFooter />
    </section>
  );
};

export default App;
