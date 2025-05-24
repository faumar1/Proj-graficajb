import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Grid, LinearProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const mockCandidatos = [
  { id: 1, nome: 'Ana Silva', email: 'ana@email.com', score: 92, status: 'Novo', experiencia: '3 anos em agência', formacao: 'Design', curriculo: '#' },
  { id: 2, nome: 'Carlos Souza', email: 'carlos@email.com', score: 80, status: 'Em análise', experiencia: '5 anos em web', formacao: 'Sistemas', curriculo: '#' },
  { id: 3, nome: 'Juliana Lima', email: 'juliana@email.com', score: 65, status: 'Novo', experiencia: '2 anos em atendimento', formacao: 'Publicidade', curriculo: '#' },
];

const RhCandidatosVaga = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (candidato) => {
    setSelected(candidato);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', width: '100vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 900, width: '100%', py: 4, mt: 6 }}>
        <Typography variant="h4" fontWeight={700} color="primary" mb={3} align="center">
          Candidatos Ranqueados - Vaga #{id}
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockCandidatos.map(c => (
                  <TableRow key={c.id}>
                    <TableCell>{c.nome}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell width={180}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <LinearProgress variant="determinate" value={c.score} sx={{ flex: 1, height: 8, borderRadius: 5 }} />
                        <Typography variant="body2" fontWeight={600}>{c.score}%</Typography>
                      </Box>
                    </TableCell>
                    <TableCell><Chip label={c.status} color={c.status === 'Novo' ? 'primary' : 'warning'} size="small" /></TableCell>
                    <TableCell align="right">
                      <Button size="small" onClick={() => handleView(c)} variant="outlined">Ver Detalhes</Button>
                      <Button size="small" href={c.curriculo} target="_blank" startIcon={<DownloadIcon />} sx={{ ml: 1 }}>Baixar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      {/* Modal de detalhes */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Detalhes do Candidato</DialogTitle>
        <DialogContent dividers>
          {selected && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><strong>Nome:</strong> {selected.nome}</Grid>
              <Grid item xs={12} sm={6}><strong>Email:</strong> {selected.email}</Grid>
              <Grid item xs={12} sm={6}><strong>Score:</strong> {selected.score}%</Grid>
              <Grid item xs={12} sm={6}><strong>Status:</strong> {selected.status}</Grid>
              <Grid item xs={12}><strong>Experiência:</strong> {selected.experiencia}</Grid>
              <Grid item xs={12}><strong>Formação:</strong> {selected.formacao}</Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          {selected && (
            <Button
              variant="contained"
              color="primary"
              href={selected.curriculo}
              target="_blank"
              startIcon={<DownloadIcon />}
            >
              Baixar Currículo
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RhCandidatosVaga; 