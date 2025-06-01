import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import PricingPage from './pages/PricingPage';
import DashboardPage from './pages/DashboardPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="builder" element={<BuilderPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;