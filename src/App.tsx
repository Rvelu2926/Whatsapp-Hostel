import React from 'react'
import './App.scss'
import { ThemeProvider } from '@mui/material/styles/'
import { theme } from './theme/materialUI'
import { Routes, Route } from 'react-router-dom'
import { routesConfig } from './route-mapping'
import Test from './pages/test'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Test />} />
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
