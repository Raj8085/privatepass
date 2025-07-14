import { Route, Routes } from "react-router-dom"
import PrivatePassLanding from "./components/Home/Home"
import PricingSection from "./components/Plan/Plan"
import ResponsiveNavbar from "./components/Navbar/navabar"
// import MainDashboard from "./components/Dashboard/MainDashboard"
import Register from "./components/AuthPage/Login"
import { HomePage } from "./components/Dashboard/Subscription/HomePage"
import Dashboard from "./components/Dashboard/MainDashboard"
import DepositeComponent from "./payment"


const App = () => {
  return (
    <>
    <ResponsiveNavbar/>
      <Routes>
        <Route path="/" element={<PrivatePassLanding />} />
        <Route path="/plan" element={<PricingSection/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/payment" element={<DepositeComponent/>}/>



      </Routes>
    </>
  )
}
export default App



// // import { Route, Routes } from "react-router-dom";
// // import PrivatePassLanding from "./components/Home/Home";
// // import PricingSection from "./components/Plan/Plan";
// // import ResponsiveNavbar from "./components/Navbar/navabar";
// // import MainDashboard from "./components/Dashboard/MainDashboard";
// // import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// // import NotFoundPage from "./NotFoundPage";


// // const App = () => {
 
// //   return (
// //     <>
// //       <ResponsiveNavbar />
// //       <Routes>
// //         <Route path="/" element={<PrivatePassLanding />} />
// //         <Route path="/plan" element={<PricingSection />} />
     


// //         {/* 👇 Protected Route for Dashboard */}
// //         <Route
// //           path="/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <MainDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //            <Route path="*" element={<NotFoundPage/>} />
// //       </Routes>
// //     </>
// //   );
// // };
// // export default App;


