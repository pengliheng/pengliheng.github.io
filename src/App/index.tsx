import React from 'react';

import { useRoutes } from "hookrouter";

import HomePage from "../component/Home";
import NotFoundPage from "../component/NotFoundPage";

import './index.scss';

const routes = {
  "/": () => <HomePage />,
};

const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <header className="App-header">
        <span>首页</span>
        <span>写的文章</span>
        <span>看过的书</span>
        <span>做过的项目</span>
      </header>
      <div className="App-layout">
        { routeResult||<NotFoundPage/> }
      </div>
    </div>
  );
}

export default App;
