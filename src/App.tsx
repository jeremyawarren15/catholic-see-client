import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import BaseLayout from './components/BaseLayout';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import AdorationNav from './components/AdorationNav';
import UserContext from './UserContext';
import ClaimedHoursContainer from './pages/claimedHours/ClaimedHoursContainer';
import AvailableHoursContainer from './pages/availableHours/AvailableHoursContainer';
import UnclaimHourModal from './components/modals/UnclaimHourModal';
import CancelRequestModal from './components/modals/CancelRequestModal';

function App() {
  return (
    <>
      <Router>
        <UserContext.Provider value={[1, 2, 3]}>
          <NavBar />
          <BaseLayout>
            <Sidebar>
              <AdorationNav />
            </Sidebar>
            <Content>
              <ClaimedHoursContainer />
              <AvailableHoursContainer />
            </Content>
          </BaseLayout>
          <Footer />
        </UserContext.Provider>
      </Router>
      <UnclaimHourModal />
      <CancelRequestModal />
    </>
  );
}

export default App;
