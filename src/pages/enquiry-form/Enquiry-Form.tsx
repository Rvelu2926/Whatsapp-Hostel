/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import './Enquiry-Form.scss'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import person from '../../assest/person.jpg'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import { SchemaOf, string, object } from 'yup'
import FormInputText from '../../lib/components/FormInputText/formInputText'
import { IEnquiry } from './Enquiry-form.modal'
import FormInputSelect from '../../lib/components/FormInputSelect/formInputSelect'

const formSchema: SchemaOf<IEnquiry> = object({
  firstName: string().required('required'),
  lastName: string().required(),
  phoneNo: string().required(),
  email: string().required(),
  duration: string().required(),
  referal: string().required(),
  noOfPeople: string().required(),
  roomChoice: string().required(),
  location: string().required(),
  building: string().required(),
})

export default function EnquiryForm(): JSX.Element {
  const methods = useForm<IEnquiry>({
    resolver: yupResolver(formSchema),
  })

  const buildingList = [
    {
      name: 'newBuilding',
      location: 'saravanan',
    },
    {
      name: 'newBuilding',
      location: 'saravanan1',
    },
    {
      name: 'newBuilding',
      location: 'saravanan2',
    },
  ]

  const submitEnquiryForm: SubmitHandler<IEnquiry> = async (data: IEnquiry) => {
    console.log('data submitted', data)
  }

  return (
    <div className="wrapper-bg p-5">
      <Box>
        <Card variant="outlined">
          <CardContent>
            <div className="flex  justify-between">
              <section className="p-3 flex-1 flex-row justify-center align-center">
                <Typography className="text-center" variant="h3" color="initial">
                  Enquiry Form
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(submitEnquiryForm)}>
                      <Grid container spacing={2} columns={12}>
                        <Grid item>
                          <FormInputText label="FirstName" name="firstName" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="lastName" label="LastName" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="phoneNo" label="Phone Number" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="email" label="Email" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="duration" label="Duration" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="referal" label="Referal" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="noOfPeople" label="No of People" />
                        </Grid>
                        <Grid item>
                          <FormInputText name="roomChoice" label="Room Choice" />
                        </Grid>
                        <Grid item>
                          {/* <FormInputText name="location" label="Location" /> */}
                          <FormInputSelect
                            name="location"
                            label="Location"
                            optionList={buildingList}
                            optionObject={true}
                            optionParam="location"
                          />
                        </Grid>
                        <Grid item>
                          <FormInputText name="building" label="Building" />
                        </Grid>
                        <Grid container alignContent="center" alignItems="center" spacing={2}>
                          <Button type="submit" variant="contained">
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </FormProvider>
                </Box>
              </section>
              <section>
                <img width="550px" height="550px" src={person} alt="person_img" />
              </section>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}
