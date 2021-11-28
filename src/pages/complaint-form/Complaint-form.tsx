import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { object, SchemaOf, string } from 'yup'
import { IComplaintForm } from '@complaint/modal'
import { Button, Grid, Typography } from '@mui/material'
import FormInputText from '../../lib/components/FormInputText/FormInputText'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './complaint-form.scss'

const complaintFormSchema: SchemaOf<IComplaintForm> = object({
  complaintDescription: string().required('required'),
  complaintsType: string().required('required'),
  contactNumber: string().required('required'),
})

export default function ComplaintForm(): JSX.Element {
  const methods = useForm<IComplaintForm>({
    resolver: yupResolver(complaintFormSchema),
  })
  const submitComplaintForm: SubmitHandler<IComplaintForm> = async (data: IComplaintForm) => {
    console.log('data submitted', data)
  }

  return (
    <div className="wrapper-complaint p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Complaint
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="login-description text-center">
              Complaints are welcomed and we will short out soonly
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitComplaintForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Contact Number" name="contactNumber" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Complaints Type" name="complaintsType" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText
                      label="Complaint Description"
                      inputMultiline={true}
                      inputRows={4}
                      name="complaintDescription"
                    />
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
