import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import Layout from "./components/Layout"
import Toast from "./components/Toast"
import AboutPage from "./pages/about/page"
import BookingPage from "./pages/booking/page"
import Error404 from "./pages/pageNotFound/page-not-found"

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        {/* <Layout> */}
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        {/* </Layout> */}
        <Toast />
      </div>
    </Router>
  )
}
