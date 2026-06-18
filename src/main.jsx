import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SundayAnalyticsProvider } from './lib/sunday-analyzer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SundayAnalyticsProvider siteKey="sa_f1519212695a8637fbb30c5b80427c55">
      <App />
    </SundayAnalyticsProvider>
  </StrictMode>
);
