import React, { useState } from 'react';
import { searchPolicies } from '../api';
import {
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack
} from '@mui/material';

const SearchPolicy = () => {
  const [username, setUsername] = useState('');
  const [policies, setPolicies] = useState([]);

  const handleSearch = async () => {
    const res = await searchPolicies(username);
    setPolicies(res.data);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Search Policies by Username</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>

      {policies.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Policy Number</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {policies.map((p) => (
                <TableRow key={p._id}>
                  <TableCell>{p.policy_number}</TableCell>
                  <TableCell>{p.user_id}</TableCell>
                  <TableCell>{new Date(p.policy_start_date).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(p.policy_end_date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Stack>
  );
};

export default SearchPolicy;
