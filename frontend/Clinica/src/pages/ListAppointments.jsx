import { useEffect, useState } from 'react';
import { getAppointments, getPatients, getMedicos, getConsultationType } from '../api/Clinica.api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function ListAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [consultation, setConsultation] = useState([]);

    useEffect(() => {
        async function loadAppointments() {
            const res = await getAppointments();
            setAppointments(res.data);
        }

        async function loadPatients() {
            const res = await getPatients();
            setPatients(res.data);
        }

        async function loadMedicos() {
            const res = await getMedicos();
            setMedicos(res.data);
        }

        async function loadConsultation() {
            const res = await getConsultationType();
            setConsultation(res.data);
        }

        async function loadData() {
            await Promise.all([loadAppointments(), loadPatients(), loadMedicos(), loadConsultation()]);
        }
        loadData();
    }, []);

    const getPatient = (id) => {
        const patient = patients.find(p => p.id === id);
        return patient ? patient.nombre_completo : 'Desconocido';
    };

    const getMedico = (id) => {
        const medico = medicos.find(d => d.id === id);
        return medico ? `${medico.nombres} ${medico.apellidos}` : 'Desconocido';
    };

    const getConsultation = (id) => {
        const consult = consultation.find(c => c.id === id);
        return consult ? consult.nombre : 'Desconocido';
    };

    // Función para exportar la tabla como PDF
    const exportToPDF = () => {
        const doc = new jsPDF();

        // Agregar título
        doc.setFontSize(20);
        doc.text('Listado de Citas Médicas', 14, 22);

        // Agregar encabezados de la tabla
        const tableColumn = ["Paciente", "Médico", "Fecha y Hora", "Tipo de Consulta", "Estado"];
        const tableRows = [];

        // Preparar los datos de la tabla
        appointments.forEach(appointment => {
            const appointmentData = [
                getPatient(appointment.paciente),
                getMedico(appointment.medico),
                new Date(appointment.fecha_hora).toLocaleString(),
                getConsultation(appointment.tipo_consulta),
                appointment.estado
            ];
            tableRows.push(appointmentData);
        });

        // Generar la tabla en el PDF
        doc.autoTable(tableColumn, tableRows, { startY: 30 });

        // Guardar el PDF
        doc.save('Historial de Citas Médicas.pdf');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Historial de Citas Médicas</h2>
            <div className="table-responsive" id="appointments-table">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Fecha y Hora</th>
                            <th>Tipo de Consulta</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{getPatient(appointment.paciente)}</td>
                                <td>{getMedico(appointment.medico)}</td>
                                <td>{new Date(appointment.fecha_hora).toLocaleString()}</td>
                                <td>{getConsultation(appointment.tipo_consulta)}</td>
                                <td>
                                    <span className={`badge ${appointment.estado === 'Completada' ? 'bg-success' : appointment.estado === 'Programada' ? 'bg-warning' : 'bg-danger'}`}>
                                        {appointment.estado}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-end mb-3">
                <button className="btn btn-primary" onClick={exportToPDF}>
                    Exportar
                </button>
            </div>
        </div>
    );
}
