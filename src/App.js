import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import DailyPage from './Routers/daily/daily-page';
import AreasPage from './Routers/areas/areas-page';
import PostsPage from './Routers/posts/posts-page';
import StatisticPage from './Routers/statistic/statistic-page';
import ProfilePage from './Routers/profile/profile-page';
import AuthorizationPage from './Routers/authorization/authorization.page';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ProfilePage />} />
        <Route path='/authorization' element={<AuthorizationPage />} />
        <Route path='/daily' element={<DailyPage />} />
        <Route path='/area' element={<AreasPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/statistic' element={<StatisticPage />} />
      </Routes>
    </>
  );
}

export default App;
