import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import Vagas from './pages/Vagas';
import VagaDetalhe from './pages/VagaDetalhe';
import Candidatar from './pages/Candidatar';
import CurriculoReserva from './pages/CurriculoReserva';
import RhDashboard from './pages/RhDashboard';
import RhCandidatosVaga from './pages/RhCandidatosVaga';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5A4FF3', // roxo startup
    },
    secondary: {
      main: '#00C9FF', // azul claro
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    button: { fontWeight: 700 }
  },
  shape: {
    borderRadius: 18,
  },
});

function Navigation() {
  const location = useLocation();
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4, boxShadow: 'none', background: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Box display="flex" alignItems="center" gap={1}>
          <RocketLaunchIcon color="primary" fontSize="large" />
          <Typography variant="h6" fontWeight={800} color="primary">StartRH</Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Button component={Link} to="/" color={location.pathname === '/' ? 'primary' : 'inherit'} variant={location.pathname === '/' ? 'contained' : 'text'} sx={{ borderRadius: 8 }}>Vagas</Button>
          <Button component={Link} to="/curriculo-reserva" color={location.pathname === '/curriculo-reserva' ? 'primary' : 'inherit'} variant={location.pathname === '/curriculo-reserva' ? 'contained' : 'text'} sx={{ borderRadius: 8 }}>Currículo Reserva</Button>
          <Button component={Link} to="/rh" color={location.pathname.startsWith('/rh') ? 'primary' : 'inherit'} variant={location.pathname.startsWith('/rh') ? 'contained' : 'text'} sx={{ borderRadius: 8 }}>Painel RH</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Box
          sx={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'transparent',
            background: 'linear-gradient(135deg, #00C9FF 0%, #5A4FF3 100%)',
            transition: 'background 0.5s',
          }}
        >
          <Routes>
            <Route path="/" element={<Vagas />} />
            <Route path="/vaga/:id" element={<VagaDetalhe />} />
            <Route path="/candidatar/:id" element={<Candidatar />} />
            <Route path="/curriculo-reserva" element={<CurriculoReserva />} />
            <Route path="/rh" element={<RhDashboard />} />
            <Route path="/rh/vaga/:id" element={<RhCandidatosVaga />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
