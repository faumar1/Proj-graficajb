import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, TextField, MenuItem, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const mockVagas = [
  { id: 1, titulo: 'Designer Gráfico', area: 'Design', tipo: 'CLT', local: 'São Paulo', requisitos: ['Photoshop', 'Illustrator'], descricao: 'Criação de peças gráficas para clientes.' },
  { id: 2, titulo: 'Desenvolvedor Front-end', area: 'TI', tipo: 'PJ', local: 'Remoto', requisitos: ['React', 'CSS'], descricao: 'Desenvolvimento de interfaces web modernas.' },
  { id: 3, titulo: 'Atendimento', area: 'Comercial', tipo: 'CLT', local: 'Belo Horizonte', requisitos: ['Comunicação', 'Vendas'], descricao: 'Atendimento ao cliente e vendas.' },
];

const areas = ['Todas', ...Array.from(new Set(mockVagas.map(v => v.area)))];
const tipos = ['Todos', ...Array.from(new Set(mockVagas.map(v => v.tipo)))];
const locais = ['Todos', ...Array.from(new Set(mockVagas.map(v => v.local)))];

const Vagas = () => {
  const [filtroArea, setFiltroArea] = useState('Todas');
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [filtroLocal, setFiltroLocal] = useState('Todos');
  const [busca, setBusca] = useState('');

  const vagasFiltradas = mockVagas.filter(v =>
    (filtroArea === 'Todas' || v.area === filtroArea) &&
    (filtroTipo === 'Todos' || v.tipo === filtroTipo) &&
    (filtroLocal === 'Todos' || v.local === filtroLocal) &&
    (v.titulo.toLowerCase().includes(busca.toLowerCase()) || v.descricao.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', width: '100vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 1100, width: '100%', py: 4, mt: 6 }}>
        <Typography variant="h4" fontWeight={700} color="primary" mb={3} align="center">
          Vagas Abertas
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={4} justifyContent="center">
          <TextField select label="Área" value={filtroArea} onChange={e => setFiltroArea(e.target.value)} size="small" sx={{ minWidth: 120 }}>
            {areas.map(area => <MenuItem key={area} value={area}>{area}</MenuItem>)}
          </TextField>
          <TextField select label="Tipo" value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)} size="small" sx={{ minWidth: 120 }}>
            {tipos.map(tipo => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
          </TextField>
          <TextField select label="Local" value={filtroLocal} onChange={e => setFiltroLocal(e.target.value)} size="small" sx={{ minWidth: 120 }}>
            {locais.map(local => <MenuItem key={local} value={local}>{local}</MenuItem>)}
          </TextField>
          <TextField label="Buscar" value={busca} onChange={e => setBusca(e.target.value)} size="small" sx={{ minWidth: 200 }} />
        </Stack>
        <Grid container spacing={3}>
          {vagasFiltradas.length === 0 && (
            <Grid item xs={12}>
              <Typography align="center" color="text.secondary">Nenhuma vaga encontrada.</Typography>
            </Grid>
          )}
          {vagasFiltradas.map(vaga => (
            <Grid item xs={12} sm={6} md={4} key={vaga.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>{vaga.titulo}</Typography>
                  <Stack direction="row" spacing={1} my={1} flexWrap="wrap">
                    <Chip label={vaga.area} size="small" />
                    <Chip label={vaga.tipo} size="small" />
                    <Chip label={vaga.local} size="small" />
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mb={1}>{vaga.descricao}</Typography>
                  <Typography variant="caption" color="text.secondary">Requisitos: {vaga.requisitos.join(', ')}</Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto' }}>
                  <Button component={Link} to={`/vaga/${vaga.id}`} variant="contained" fullWidth>Candidatar-se</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {vagasFiltradas.length === 0 && (
          <Box mt={6} textAlign="center">
            <Button component={Link} to="/curriculo-reserva" variant="outlined" size="large">Cadastrar Currículo Reserva</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Vagas; 