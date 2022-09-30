import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Protected from './utils/protected-route/protected-route';

import { useSelector } from 'react-redux';
import { selectUserLoggedIn } from './App/slices/user.slice';

import './App.css';
import DailyPage from './Routers/daily/daily-page';
import AreasPage from './Routers/areas/areas-page';
import PostsPage from './Routers/posts/posts-page';
import StatisticPage from './Routers/statistic/statistic-page';
import ProfilePage from './Routers/profile/profile-page';
import AuthorizationPage from './Routers/authorization/authorization.page';

function App() {
  const loggedIn = useSelector(selectUserLoggedIn)

  return (
    <>
      <Routes>
        <Route index element={<AuthorizationPage />} />
        <Route path='/profile' element={
          <Protected isLoggedIn={loggedIn}>
            <ProfilePage />
          </Protected>
        } />
        <Route path='/daily' element={
          <Protected isLoggedIn={loggedIn}>
            <DailyPage />
          </Protected>
        } />
        <Route path='/area' element={
          <Protected isLoggedIn={loggedIn}>
            <AreasPage />
          </Protected>
        } />
        <Route path='/posts' element={
          <Protected isLoggedIn={loggedIn}>
            <PostsPage />
          </Protected>
        } />
        <Route path='/statistic' element={
          <Protected isLoggedIn={loggedIn}>
            <StatisticPage />
          </Protected>
        } />
      </Routes>
    </>
  );
}

export default App;
