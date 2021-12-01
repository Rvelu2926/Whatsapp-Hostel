import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './room-creation.scss'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import { IRoom } from '@modal/location-building-room.modal'
import { roomCreationSchema } from '@constant/validation-schema.constant'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export default function RoomCreation(): JSX.Element {
  const methods = useForm<IRoom>({
    resolver: yupResolver(roomCreationSchema),
  })

  const submitEnquiryForm: SubmitHandler<IRoom> = async (data: IRoom) => {
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
                    <FormInputText label="buildings" name="buildings" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomCapacity" name="roomCapacity" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomFloor" name="roomFloor" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomName" name="roomName" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="roomType" name="roomType" />
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
