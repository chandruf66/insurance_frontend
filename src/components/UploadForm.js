import React, { useState } from 'react';
import { uploadFile } from '../api';
import {
  Button,
  Typography,
  Input,
  Alert,
  Stack,
  CircularProgress,
} from '@mui/material';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true); // Show loader and disable button
    try {
      const res = await uploadFile(formData);
      setMessage(res.data.message || 'Upload successful');
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setLoading(false); // Hide loader and re-enable button
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Upload XLSX/CSV</Typography>

      <Input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        disabled={loading}
      />

      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={loading || !file}
        startIcon={loading && <CircularProgress size={20} />}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </Button>

      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  );
};

export default UploadForm;
