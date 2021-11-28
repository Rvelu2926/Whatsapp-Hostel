import {
  Grid,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import * as React from 'react'
import DetailCard from './components/detail-card'
import { experimentalStyled as styled } from '@mui/material/styles'
import DashboardCard from './components/card'

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.primary.dark,
  boxShadow: 'none',
  width: '100%',
}))

const AdminDashboard = (): JSX.Element => {
  const detailCardData = [
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
  ]

  return (
    <div className="container m-5">
      <DashboardCard></DashboardCard>
      <DetailCard>
        {detailCardData.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Item>
                  <Typography variant="h6">{item.name}</Typography>
                  <div className="flex flex-row justify-between mt-2">
                    <div>
                      <Typography variant="caption">Phone :</Typography>
                      <Typography variant="subtitle2">{item.phone}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Email :</Typography>
                      <Typography variant="subtitle2">{item.email}</Typography>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2">
                    <div>
                      <Typography variant="caption">Location :</Typography>
                      <Typography variant="subtitle2">{item.location}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Building :</Typography>
                      <Typography variant="subtitle2">{item.building}</Typography>
                    </div>
                  </div>
                  <div></div>
                </Item>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </DetailCard>
    </div>
  )
}

export default AdminDashboard
