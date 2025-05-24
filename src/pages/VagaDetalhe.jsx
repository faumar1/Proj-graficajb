import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Paper, Stack, Chip, Button } from '@mui/material';

const mockVagas = [
  { id: 1, titulo: 'Designer Gráfico', area: 'Design', tipo: 'CLT', local: 'São Paulo', requisitos: ['Photoshop', 'Illustrator'], descricao: 'Criação de peças gráficas para clientes.' },
  { id: 2, titulo: 'Desenvolvedor Front-end', area: 'TI', tipo: 'PJ', local: 'Remoto', requisitos: ['React', 'CSS'], descricao: 'Desenvolvimento de interfaces web modernas.' },
  { id: 3, titulo: 'Atendimento', area: 'Comercial', tipo: 'CLT', local: 'Belo Horizonte', requisitos: ['Comunicação', 'Vendas'], descricao: 'Atendimento ao cliente e vendas.' },
];

const VagaDetalhe = () => {
  const { id } = useParams();
  const vaga = mockVagas.find(v => v.id === Number(id));

  if (!vaga) return <Typography align="center" mt={6}>Vaga não encontrada.</Typography>;

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', width: '100vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 700, width: '100%', py: 4, mt: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={700} mb={2}>{vaga.titulo}</Typography>
          <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
            <Chip label={vaga.area} />
            <Chip label={vaga.tipo} />
            <Chip label={vaga.local} />
          </Stack>
          <Typography variant="body1" mb={2}>{vaga.descricao}</Typography>
          <Typography variant="subtitle2" color="text.secondary" mb={1}>Requisitos:</Typography>
          <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
            {vaga.requisitos.map(req => <Chip key={req} label={req} color="primary" />)}
          </Stack>
          <Button component={Link} to={`/candidatar/${vaga.id}`} variant="contained" size="large">Candidatar-se</Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default VagaDetalhe; 