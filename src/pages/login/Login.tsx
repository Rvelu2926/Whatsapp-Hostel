import React from 'react'
import { Avatar, Grid, Paper, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import './login.scss'

function Login() {
  const paperStyle = { padding: 20, height: 'auto', width: 400, margin: '20px auto' }
  return (
    <>
      <div className="main-style">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Box
              sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Box>
            <Grid>
              <Typography variant="h2" className="my-style1">
                {' '}
                Admin Sign in
              </Typography>
            </Grid>
            <Box sx={{ mt: '1rem' }}>
              <Typography variant="h6" className="my-style2">
                Sign in and start managing your Hostellers!
              </Typography>
            </Box>
            <Box sx={{ m: '2rem' }}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined" label="Login" variant="outlined" />
                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                />
              </Box>
            </Box>
            <div className="block">
              <Grid container>
                <Grid item xs={6}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="ml-2">Remember Me</span>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label className="inline-flex items-right">
                    <a>Forget Password?</a>
                  </label>
                </Grid>
              </Grid>
            </div>
            <Box sx={{ m: '1.5rem' }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>
      </div>
    </>
  )
}
export default Login
