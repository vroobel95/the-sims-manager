import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { LoginPage } from './components/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to={routes.LANDING}/>}/>
          <Route path={routes.LANDING} element={
            <>
              <LoginPage/>
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
