import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import AdminDashboard from "./pages/AdminDashboard"
import { useAuthStore } from "./store/useAuthStore"
import DashboardLayout from "./pages/DashboardLayout"
import { UserDetailsPage } from "./pages/UserDetailsPage"
import { Toaster} from "sonner"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isAdmin } = useAuthStore()
  console.log(isAdmin, isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  if (!isAdmin) {
    return <Navigate to="/" replace />
  }
  return <>
    {children}
  </>
}

function App() {

  return (
    <div className="min-h-screen bg-[#e2ecf8]">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/users/:userId" element={<UserDetailsPage />} />
        </Routes>

      </Router>
      <Toaster position="top-right"  />
    </div>
  )
}

export default App
