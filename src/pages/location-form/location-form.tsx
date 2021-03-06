import React from 'react'
import { useForm, FormProvider, SubmitHandler, useFieldArray } from 'react-hook-form'
import { Button, Grid, Typography } from '@mui/material'
import FormInputText from '@components/FormInputText/FormInputText'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import { locationCreationSchema } from '@constant/validation-schema.constant'
import { ILocation, ILocationApi } from '@modal/location-building-room.modal'
import RoomController from './room-controller'
import { buildingDefaultValue, locationDefaultValue } from '@constant/form-default-value'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import IconButton from '@mui/material/Button'
import './location-form.scss'
import { locationResponseDto } from './location-utils'
import { postapiHandler } from '@utils/apiHandler'

export default function LocationForm(): JSX.Element {
  const methods = useForm<ILocation>({
    resolver: yupResolver(locationCreationSchema),
    defaultValues: locationDefaultValue,
  })
  const { control } = methods
  const { fields, append, remove } = useFieldArray({
    name: 'buildings',
    control,
  })

  const submitComplaintForm: SubmitHandler<ILocation> = async (datas: ILocation) => {
    console.log('data submitted', datas)
    const locationResponse: ILocationApi = locationResponseDto(datas)
    console.log(locationResponse)
    const data = {
      apiUrl: 'http://138.197.146.75:9050/v1/api/location/create',
      payload: locationResponse,
    }
    const res = await postapiHandler(data)
    console.log(res)
  }

  return (
    <div className="wrapper-location p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Location
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="login-description text-center">
              Add the location and handle inside your hands !!
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitComplaintForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="Location Name" name="locationName" />
                  </Grid>
                </Grid>
                <label>Buildings</label>
                {fields.map((item, index) => {
                  return (
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={12} key={item.id}>
                      <Grid item xs={12} md={4} sm={4}>
                        <FormInputText
                          label="buildingAddress"
                          name={`buildings[${index}].buildingAddress`}
                        />
                      </Grid>
                      <Grid item xs={12} md={4} sm={4}>
                        <FormInputText
                          label="buildingName"
                          name={`buildings[${index}].buildingName`}
                        />
                      </Grid>
                      <Grid item xs={12} md={4} sm={4}>
                        <FormInputText label="zipCode" name={`buildings[${index}].zipCode`} />
                      </Grid>
                      <Grid item xs={12} md={12} sm={12}>
                        <RoomController nestIndex={index} {...{ control }} />
                      </Grid>
                      <IconButton
                        onClick={() => {
                          remove(index)
                        }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          append(buildingDefaultValue)
                        }}
                        aria-label="add"
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Grid>
                  )
                })}

                <Box justifyContent="center" marginTop={3} display="flex" alignContent="center">
                  <div>
                    <Button type="reset" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                  <div className="ml-5">
                    <Button type="submit" variant="contained">
                      Create Complaint
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
