import React from 'react'
import Typography from '@mui/material/Typography'

export default function EnquiryForm(): JSX.Element {
  return (
    <div className="wrapper w-screen h-screen">
      <div className="flex justify-center">
        <Typography variant="h3">What's Up Hostel</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="h6">Any question or remark? Just write us a message </Typography>
      </div>
      <div className="card shadow m-8 bg-white p-3">
        <div className="flex justify-between">
          <div className="contact-card "></div>
          <div className="enquiry-form"></div>
        </div>
      </div>
    </div>
  )
}
