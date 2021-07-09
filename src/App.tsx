import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BaseLayout from './components/BaseLayout';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import AdorationNav from './components/AdorationNav';
import AvailableHoursPage from './pages/availableHours/AvailableHoursPage';

function App() {
  return (
    <>
      <NavBar />
      <BaseLayout>
        <Sidebar>
          <AdorationNav />
        </Sidebar>
        <Content>
          <AvailableHoursPage />
        </Content>
      </BaseLayout>
      <Footer />
    </>
  );
}

export default App;
