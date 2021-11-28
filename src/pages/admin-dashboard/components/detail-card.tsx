import React from 'react'
import Box from '@mui/material/Box'

import Grid from '@mui/material/Grid'

interface IDetaialCardProps {
  children: React.ReactNode
}

export default function DetailCard({ children }: IDetaialCardProps): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {children}
      </Grid>
    </Box>
  )
}
