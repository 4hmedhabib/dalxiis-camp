import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { Home } from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
