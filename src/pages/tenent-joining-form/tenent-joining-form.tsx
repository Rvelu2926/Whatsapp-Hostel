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
import FormInputText from '../../lib/components/FormInputText/FormInputText'
import { ITenentJoinningForm } from './tenent-joining.modal'

const formSchema: SchemaOf<ITenentJoinningForm> = object({
  firstName: string().required('required'),
  lastName: string().required(),
  phoneNo: string().required(),
  idNo: string().required(),
  emergencyNo: string().required(),
})

export default function TenentJoiningForm() {
  const methods = useForm<ITenentJoinningForm>({
    resolver: yupResolver(formSchema),
  })

  const submitEnquiryForm: SubmitHandler<ITenentJoinningForm> = async (
    data: ITenentJoinningForm,
  ) => {
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
                  Tenent Joining Form
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(submitEnquiryForm)}>
                      <Grid container spacing={2} columns={12}>
                        <Grid item>
                          <FormInputText label="FirstName" name="firstName" />
                        </Grid>
                        <Grid item>
                          <FormInputText label="LastName" name="lastName" />
                        </Grid>
                        <Grid item>
                          <FormInputText label="Phone No" name="phoneNo" />
                        </Grid>
                        <Grid item>
                          <FormInputText label="Id No" name="idNo" />
                        </Grid>
                        <Grid item>
                          <FormInputText label="Emergency No" name="emergencyNo" />
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
