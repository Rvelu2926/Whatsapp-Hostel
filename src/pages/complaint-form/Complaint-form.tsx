import React, { useEffect } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { mixed, object, SchemaOf, string } from 'yup'
import { IComplaintForm } from '@modal/complaint-form.modal'
import { Button, Grid, Typography } from '@mui/material'
import FormInputText from '@components/FormInputText/FormInputText'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './complaint-form.scss'
import CommonFilesInput from '@components/FormInputFiles/common-files-input'
import { toBase64 } from '@utils/filereader'

const complaintFormSchema: SchemaOf<IComplaintForm> = object({
  complaintDescription: string().required('required'),
  complaintsType: string().required('required'),
  contactNumber: string().required('required'),
  compaintFiles: mixed().nullable(),
})

export default function ComplaintForm(): JSX.Element {
  const methods = useForm<IComplaintForm>({
    resolver: yupResolver(complaintFormSchema),
  })

  const { watch } = methods

  const fileInputWatch = watch('compaintFiles')
  let fileName = []
  useEffect(() => {
    if (fileInputWatch) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fileName = []
      for (let i = 0; i < fileInputWatch.length; i++) {
        const file: File = fileInputWatch[i]
        fileName.push(file.name)
      }
      console.log(fileName)
    }
    return () => {}
  }, [fileInputWatch])

  const submitComplaintForm: SubmitHandler<IComplaintForm> = async (data: IComplaintForm) => {
    console.log('data submitted', data)
    const file = data.compaintFiles[0]
    console.log(await toBase64(file))
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
                  <Grid item xs={12} md={12} sm={12}>
                    <CommonFilesInput
                      name="compaintFiles"
                      id="compaint-files"
                      label="compaintFiles"
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
