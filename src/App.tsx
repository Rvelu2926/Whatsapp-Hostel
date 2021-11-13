import React from 'react'
import './App.scss'
import { ThemeProvider } from '@mui/material/styles/'
import { theme } from './theme/materialUI'
// import FieldArrayForm from './pages/test'
import EnquiryForm from './pages/enquiry-form/components/Enquiry-Form'
import { Routes, Route } from 'react-router-dom'
import { routesConfig } from './route-mapping'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routesConfig.map(({ path, components }, i) => {
          const NewComponents = components
          return (
            <Route
              path={path}
              key={i}
              element={
                <React.Suspense fallback={<>...</>}>
                  <NewComponents />
                </React.Suspense>
              }
            />
          )
        })}
      </Routes>
    </ThemeProvider>
  )
}
