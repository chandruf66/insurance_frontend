import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import UploadForm from './components/UploadForm';
import SearchPolicy from './components/SearchPolicy';
import AggregatePolicy from './components/AggregatePolicy';

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          🛡 Insurance System Dashboard
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <UploadForm />
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <SearchPolicy />
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <AggregatePolicy />
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
