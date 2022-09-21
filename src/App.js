import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import ProfilePage from './routers/profile/profile-page';
import DailyPage from './routers/daily/daily-page';
import AreaPage from './routers/area/area-page';
import PostsPage from './routers/posts/posts-page';
import StatisticPage from './routers/statistic/statistic-page';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ProfilePage />} />
        <Route path='/daily' element={<DailyPage />} />
        <Route path='/area' element={<AreaPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/statistic' element={<StatisticPage />} />
      </Routes>
    </>
  );
}

export default App;
