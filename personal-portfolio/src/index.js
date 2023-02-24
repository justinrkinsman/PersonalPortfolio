import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsPage } from './components/AllProjects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/all-projects' element={<ProjectsPage />} />
          <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);