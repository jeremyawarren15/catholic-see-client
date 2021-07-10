import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BaseLayout from './components/BaseLayout';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import AdorationNav from './components/AdorationNav';
import AvailableHoursContainer from './pages/availableHours/AvailableHoursContainer';
import UserContext from './UserContext';

function App() {
  return (
    <>
      <UserContext.Provider value={false}>
        <NavBar />
        <BaseLayout>
          <Sidebar>
            <AdorationNav />
          </Sidebar>
          <Content>
            <AvailableHoursContainer />
          </Content>
        </BaseLayout>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
