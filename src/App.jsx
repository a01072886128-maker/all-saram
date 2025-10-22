import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import OwnerDashboard from './pages/OwnerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import MenuManagement from './pages/MenuManagement';
import ReservationsToday from './pages/ReservationsToday';
import NoShowManagement from './pages/NoShowManagement';
import VoiceReservation from './pages/VoiceReservation';
import WhoWith from './pages/WhoWith';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/owner/menu" element={<MenuManagement />} />
        <Route path="/owner/reservations" element={<ReservationsToday />} />
        <Route path="/owner/noshow" element={<NoShowManagement />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/voice" element={<VoiceReservation />} />
        <Route path="/customer/situation" element={<WhoWith />} />
      </Routes>
    </Router>
  );
}

export default App;
