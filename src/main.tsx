import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './routes/router-provider.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
