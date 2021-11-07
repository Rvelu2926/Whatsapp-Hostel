import React from 'react'
import '../styles/Enquiry-Form.scss'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import person from '../../../assest/person.jpg'
import Typography from '@mui/material/Typography'

const card = (
  <React.Fragment>
    <CardContent>
      <div className="flex  justify-between">
        <section className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Enquiry Form
          </Typography>
        </section>
        <section>
          <img width="550px" height="550px" src={person} alt="person_img" />
        </section>
      </div>
    </CardContent>
  </React.Fragment>
)

export default function EnquiryForm(): JSX.Element {
  return (
    <>
      <div className="wrapper-bg p-5">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </>
  )
}
