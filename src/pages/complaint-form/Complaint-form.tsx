import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { object, SchemaOf, string } from 'yup'
import { IComplaintForm } from './complaint-form.modal'
import { Button, Grid } from '@mui/material'
import FormInputText from '../../lib/components/FormInputText/FormInputText'
import { yupResolver } from '@hookform/resolvers/yup'

const complaintFormSchema: SchemaOf<IComplaintForm> = object({
  name: string().required('required'),
  roomNo: string().required('required'),
  idNo: string().required('required'),
  feedback: string().required('required'),
})

export default function ComplaintForm(): JSX.Element {
  const methods = useForm<IComplaintForm>({
    resolver: yupResolver(complaintFormSchema),
  })
  const submitComplaintForm: SubmitHandler<IComplaintForm> = async (data: IComplaintForm) => {
    console.log('data submitted', data)
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitComplaintForm)}>
          <Grid container spacing={3} columns={12}>
            <Grid item>
              <FormInputText name="name" label="Full Name" />
            </Grid>
            <Grid item>
              <FormInputText name="roomNo" label="Room No" />
            </Grid>
            <Grid item>
              <FormInputText name="idNo" label="Identification Number" />
            </Grid>
            <Grid item>
              <FormInputText name="feedback" label="Feedback" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  )
}
