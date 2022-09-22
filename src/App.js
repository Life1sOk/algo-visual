import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import DailyPage from './Routers/daily/daily-page';
import AreaPage from './Routers/area/area-page';
import PostsPage from './Routers/posts/posts-page';
import StatisticPage from './Routers/statistic/statistic-page';
import ProfilePage from './Routers/profile/profile-page';

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
