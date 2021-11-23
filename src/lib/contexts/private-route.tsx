import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()

  const { isAuthenticated, loading } = { isAuthenticated: true, loading: false }

  if (loading) {
    return <p>Checking authenticaton..</p>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default PrivateRoute
