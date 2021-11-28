import React from 'react'
// import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
// import { object, SchemaOf, string } from 'yup'
// import { IComplaintForm } from '@complaint/modal'
// import { Button, Grid, Paper, Typography } from '@mui/material'
// import FormInputText from '../../lib/components/FormInputText/FormInputText'
// import { yupResolver } from '@hookform/resolvers/yup'
// import Box from '@mui/material/Box'

// const complaintFormSchema: SchemaOf<IComplaintForm> = object({
//     complaintDescription : string().required('required'),
//     complaintsType : string().required('required'),
//     contactNumber : string().required('required'),
//   })

export default function LocationForm(): JSX.Element {
  // const paperStyle = { padding: 20, height: 'auto', maxWidth: 510, margin: '20px auto' }
  // const methods = useForm<IComplaintForm>({
  //   resolver: yupResolver(complaintFormSchema),
  // })
  // const submitComplaintForm: SubmitHandler<IComplaintForm> = async (data: IComplaintForm) => {
  //   console.log('data submitted', data)
  // }

  return (
    // <div className="text-center m-0  w-screen h-screen main-style overflow-hidden flex items-center justify-center">
    //   <Grid>
    //     <Paper elevation={10} style={paperStyle}>
    //       <Grid>
    //         <Typography variant="h4" className="login-title text-center font-extrabold">
    //         Send Us a Message
    //         </Typography>
    //       </Grid>
    //       <FormProvider {...methods}>
    //         <form onSubmit={methods.handleSubmit(submitComplaintForm)}>
    //           <Box sx={{ m: '2rem' }}>
    //             <FormInputText label="Contact Number" name="contactNumber" />
    //             <FormInputText label="Complaints Type" name="complaintsType" />
    //             <FormInputText label="Complaint Description"  name="complaintDescription" />
    //           </Box>
    //           <Box sx={{ m: '1.5rem' }}>
    //             <Button variant="contained" type="submit" fullWidth>
    //               Login
    //             </Button>
    //           </Box>
    //         </form>
    //       </FormProvider>
    //     </Paper>
    //   </Grid>
    // </div>
    <div></div>
  )
}
