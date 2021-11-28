import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  borderColor: theme.palette.primary.dark,
  boxShadow: theme.shadows[2],
}))

export default function DashboardCard(): JSX.Element {
  const cardDetails = [
    {
      name: 'Enquiry/Booking Form',
      icon: '',
    },
    {
      name: 'Rent/Payment Remainder',
      icon: '',
    },
    {
      name: 'Expenses',
      icon: '',
    },
    {
      name: 'Complaints',
      icon: '',
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        wrap="nowrap"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {cardDetails.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Item>
              <Typography variant="h6" margin={2}>
                {item.name}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
