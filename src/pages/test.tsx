import React, { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { object, number } from 'yup'
// import FieldInput from '../lib/components/field-input/FieldInput'
// import * as yup from 'yup'

interface IFormProps {
  name: number
}

const Test: FC = () => {
  // const formSchema =  yup.object().shape({
  //   name: yup.string().required('Fullname is required')
  // })

  const formSchema = object({
    name: number().required('Name is required'),
  })

  // const methods = useForm<IFormProps>({
  //   resolver: yupResolver(formSchema),
  // })
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  })

  const submitRecipe: SubmitHandler<IFormProps> = async (datfa: IFormProps) => {
    // console.log('data submitted', data);
  }

  return (
    <div>
      <Grid container>
        {/* <FormProvider {...methods}> */}
        <form onSubmit={handleSubmit(submitRecipe)}>
          <Grid item>
            <TextField
              required
              id="name"
              label="Full Name"
              fullWidth
              margin="dense"
              {...register('name')}
              error={errors.name ? true : false}
              helperText={errors.name ? errors.name : ''}
            />
            {/* <Typography variant="inherit" color="textSecondary">
              {errors.name ? errors.name.message : ''}
            </Typography> */}
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </form>
        {/* </FormProvider> */}
      </Grid>
    </div>
  )
}

export default Test
