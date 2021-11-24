import React from 'react'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import './login.scss'
import { Link } from 'react-router-dom'
import FormInputText from '../../lib/components/FormInputText/FormInputText'
import { ILoginForm } from '@login/modal'
import { object, SchemaOf, string } from 'yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const loginFormSchema: SchemaOf<ILoginForm> = object({
  userName: string().required('Username required'),
  password: string().required('Password required'),
})

function Login(): JSX.Element {
  const paperStyle = { padding: 20, height: 'auto', maxWidth: 510, margin: '20px auto' }
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
  })

  const submitLoginForm: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
    console.log('data submitted', data)
  }

  return (
    <>
      <div className="text-center m-0  w-screen h-screen main-style overflow-hidden flex items-center justify-center">
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
              <Typography variant="h2" className="login-title text-center font-extrabold">
                {' '}
                Admin Sign in
              </Typography>
            </Grid>
            <Box sx={{ mt: '1rem' }}>
              <Typography variant="h6" className="login-description text-center">
                Sign in and start managing your Hostellers!
              </Typography>
            </Box>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitLoginForm)}>
                <Box sx={{ m: '2rem' }}>
                  <FormInputText label="Username" name="userName" />
                  <FormInputText label="Password" inputType="password" name="password" />
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
                        <Link to="/">Forget Password?</Link>
                      </label>
                    </Grid>
                  </Grid>
                </div>
                <Box sx={{ m: '1.5rem' }}>
                  <Button variant="contained" type="submit" fullWidth>
                    Login
                  </Button>
                </Box>
              </form>
            </FormProvider>
          </Paper>
        </Grid>
      </div>
    </>
  )
}
export default Login
