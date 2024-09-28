import { useEffect, useState } from 'react';
import { getPatients, getMedicos } from '../api/Clinica.api';
import 'bootstrap/dist/css/bootstrap.min.css';

export function AddAppointment() {
    const [patients, setPatients] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [patient, setPatient] = useState(''); // Estado para el paciente seleccionado
    const [doctor, setDoctor] = useState(''); // Estado para el médico seleccionado
    const [date, setDate] = useState(''); // Estado para la fecha seleccionada
    const [time, setTime] = useState(''); // Estado para la hora seleccionada
    const [reason, setReason] = useState(''); // Estado para el motivo de la cita

    useEffect(() => {
        async function loadPatients() {
            const res = await getPatients();
            setPatients(res.data); // Asumiendo que el endpoint devuelve un array de pacientes
        }

        async function loadMedicos() {
            const res = await getMedicos();
            setMedicos(res.data); // Asumiendo que el endpoint devuelve un array de médicos
        }

        async function loadData() {
            await Promise.all([loadPatients(), loadMedicos()]);
        }
        loadData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de datos a tu backend
        console.log({
            patient,
            doctor,
            date,
            time,
            reason,
        });
    };

    return (
        <div className="container mt-5">
            <h2>Agendar Cita</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="patient">Paciente</label>
                    <select
                        className="form-control"
                        id="patient"
                        value={patient}
                        onChange={(e) => setPatient(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar paciente</option>
                        {patients.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.nombre_completo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Médico</label>
                    <select
                        className="form-control"
                        id="doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar médico</option>
                        {medicos.map((d) => (
                            <option key={d.id} value={d.id}>
                                {`${d.nombres} ${d.apellidos}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Fecha</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Hora</label>
                    <input
                        type="time"
                        className="form-control"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Motivo de la cita</label>
                    <textarea
                        className="form-control"
                        id="reason"
                        rows="3"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Agendar Cita
                </button>
            </form>
        </div>
    );
}
