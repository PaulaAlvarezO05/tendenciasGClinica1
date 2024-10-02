import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddAppointment } from './pages/AddAppointments';
import { ListAppointments } from './pages/ListAppointments';
import { AddPatient } from './pages/AddPatient';
import { AddUser} from './pages/AddUsers';
import { ManagePatients } from './pages/ManagePatients';
import { ListPatients} from './pages/ListPatients';
import { UpdatePatients } from './pages/UpdatePatients';

function App() {
    return (
        <Router>
            <div className="container">
                <div className="mb-4">
                    <Link to="/add-appointment" className="btn btn-primary me-2">Agregar Cita</Link>
                    <Link to="/list-appointments" className="btn btn-secondary me-2">Listar Citas</Link>
                    <Link to="/manage-patient" className="btn btn-success me-2">Pacientes</Link>
                    <Link to="/add-user" className="btn btn-success">Agregar Usuario</Link>
                </div>
                <Routes>
                    <Route path="/add-appointment" element={<AddAppointment />} />
                    <Route path="/list-appointments" element={<ListAppointments />} />
                    <Route path="/manage-patient" element={<ManagePatients />} />
                    <Route path="/add-patient" element={<AddPatient />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/list-patient" element={<ListPatients />} />
                    <Route path="/update-patient" element={< UpdatePatients/>} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
