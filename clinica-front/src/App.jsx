import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {PatientsPage} from './pages/PatientsPage'
import {PatientsFormPage} from './pages/PatientsFormPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
   <BrowserRouter>
   
   <Navigation />

   <Routes>
    <Route path="/" element={<Navigate to="/patients" />} />
    <Route path="/patients" element={<PatientsPage/>} />
    <Route path="/patients-create" element={<PatientsFormPage/>} />
   
   </Routes>
   </BrowserRouter> 
  )
}

export default App