import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './user-creation.scss'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import { IUserCreationForm } from '@modal/user-creation.modal'
import { userCreationSchema } from '@constant/validation-schema.constant'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export default function UserCreationForm(): JSX.Element {
  const methods = useForm<IUserCreationForm>({
    resolver: yupResolver(userCreationSchema),
  })

  const submitEnquiryForm: SubmitHandler<IUserCreationForm> = async (data: IUserCreationForm) => {
    console.log('data submitted', data)
  }

  return (
    <div className="wrapper-user-creation p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            User Creation
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="text-center">
              Create a user and maintain your hostel inside your hands
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitEnquiryForm)}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="name" name="name" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="password" name="password" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="phoneNumber" name="phoneNumber" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="email" name="email" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="userType" name="userType" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="zipCode" name="zipCode" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText
                      label="address"
                      inputMultiline={true}
                      inputRows={3}
                      name="address"
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="buildingsDTO" name="buildingsDTO" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomName" name="roomsDTO.roomName" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomFloor" name="roomsDTO.roomFloor" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomCapacity" name="roomsDTO.roomCapacity" />
                  </Grid>
                </Grid>
                <Box justifyContent="center" marginTop={3} display="flex" alignContent="center">
                  <div>
                    <Button type="reset" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                  <div className="ml-5">
                    <Button type="submit" variant="contained">
                      Login
                    </Button>
                  </div>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </div>
      </div>
    </div>
  )
}
