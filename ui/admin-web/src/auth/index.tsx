import { useViewer } from '@/entities/viewer';
import { AdminIn } from '@/shared/generated/graphql/graphql';
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Auth() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { actions } = useViewer()

  const handleLoginSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const input: AdminIn = {
      login,
      password
    }
    const response = await actions.login(input);

    if (response) return <Alert severity="error" sx={{ marginBottom: 2 }}>{response}</Alert>
  };
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box
        sx={{
          width: 300,
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24,
        }}>
        <form onSubmit={handleLoginSubmit}>
          <Typography variant="h6" gutterBottom>Log in to your account</Typography>
          <TextField
            fullWidth
            required
            label="Login"
            type="text"
            margin="normal"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  )
}
