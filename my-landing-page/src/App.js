import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import UploadPage from './UploadPage';
import CustomInvitePage from './CustomInvite';
import ExternalRedirect from './Redirect';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/upload" element={<UploadPage />} exact />
        <Route path="/custominvite" element={<CustomInvitePage />} exact />
        <Route path="/invite" element={<ExternalRedirect to="https://discord.gg/tradebase" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
