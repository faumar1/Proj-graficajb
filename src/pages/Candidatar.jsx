import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid, TextField, Button, Alert } from '@mui/material';

const Candidatar = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', width: '100vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: 700, width: '100%', py: 4, mt: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={700} mb={2}>Candidatura à Vaga #{id}</Typography>
          {success && <Alert severity="success" sx={{ mb: 2 }}>Candidatura enviada com sucesso!</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Nome Completo" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Telefone" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Formação" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Experiência Profissional" fullWidth multiline rows={3} required />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
                  {file ? `Arquivo selecionado: ${file.name}` : 'Upload Currículo (PDF)'}
                  <input type="file" hidden accept=".pdf" onChange={e => setFile(e.target.files[0])} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth size="large">Enviar Candidatura</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Candidatar; 