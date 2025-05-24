import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const mockVagas = [
  { id: 1, titulo: 'Designer Gráfico', candidatos: 5 },
  { id: 2, titulo: 'Desenvolvedor Front-end', candidatos: 8 },
  { id: 3, titulo: 'Atendimento', candidatos: 2 },
];

const RhDashboard = () => (
  <Box sx={{ minHeight: 'calc(100vh - 64px)', width: '100vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
    <Box sx={{ maxWidth: 900, width: '100%', py: 4, mt: 6 }}>
      <Typography variant="h4" fontWeight={700} color="primary" mb={3} align="center">
        Painel RH - Vagas Abertas
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vaga</TableCell>
                <TableCell>Nº de Candidatos</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockVagas.map(vaga => (
                <TableRow key={vaga.id}>
                  <TableCell>{vaga.titulo}</TableCell>
                  <TableCell>{vaga.candidatos}</TableCell>
                  <TableCell align="right">
                    <Button component={Link} to={`/rh/vaga/${vaga.id}`} variant="contained" size="small">Ver Candidatos</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  </Box>
);

export default RhDashboard; 