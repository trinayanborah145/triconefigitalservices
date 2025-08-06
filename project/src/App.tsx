import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactFormPage from './pages/ContactFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/services/:id" element={
          <MainLayout>
            <ServiceDetailsPage />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <AboutUsPage />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <ContactFormPage />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;