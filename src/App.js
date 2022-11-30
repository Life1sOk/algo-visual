import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Protected from './utils/protected-route/protected-route';

import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from './App/slices/auth.slice';

import './App.css';
import DailyPage from './Routers/daily/daily-page';
import AreasPage from './Routers/areas/areas-page';
import PostsPage from './Routers/posts/posts-page';
import StatisticPage from './Routers/statistic/statistic-page';
import ProfilePage from './Routers/profile/profile-page';
import AuthorizationPage from './Routers/authorization/authorization.page';
import Navigation from './Components/navigation/navigation.component';

function App() {
  const loggedIn = useSelector(selectAuthLoggedIn);

  return (
    <>
      <Routes>
        <Route index element={<AuthorizationPage />} />
        <Route path='/' element={<Navigation />}>
          <Route path='profile' element={
            <Protected isLoggedIn={loggedIn}>
              <ProfilePage />
            </Protected>
          } />
          <Route path='daily' element={
            <Protected isLoggedIn={loggedIn}>
              <DailyPage />
            </Protected>
          } />
          <Route path='areas/*' element={
            <Protected isLoggedIn={loggedIn}>
              <AreasPage />
            </Protected>
          } />
          <Route path='posts' element={
            <Protected isLoggedIn={loggedIn}>
              <PostsPage />
            </Protected>
          } />
          <Route path='statistic' element={
            <Protected isLoggedIn={loggedIn}>
              <StatisticPage />
            </Protected>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;