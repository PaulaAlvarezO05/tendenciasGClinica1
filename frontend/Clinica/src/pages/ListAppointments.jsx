import { useEffect, useState } from 'react';
import { getAppointments, getPatients, getMedicos, getConsultationType } from '../api/Clinica.api';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export function ListAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [consultation, setConsultation] = useState([])

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
            console.log(res)
            setConsultation(res.data);
        }

        async function loadData() {
            await Promise.all([loadAppointments(), loadPatients(), loadMedicos(), loadConsultation()]);
        }
        loadData();
    }, []);

    // Funciones para obtener nombres de paciente y médico
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

    /*// Función para exportar la tabla como PDF
    const exportToPDF = () => {
        const input = document.getElementById('appointments-table');
        html2canvas(input, { useCORS: true }).then((canvas) => {
            const pdf = new jsPDF();
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190; // Ajusta el ancho de la imagen
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('citas.pdf');
        });
    };
    <button className="btn btn-primary mb-3" onClick={exportToPDF}>
                Exportar como PDF
            </button>
*/
    return (
        <div>
            
            <div className="table-responsive" id="appointments-table">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Fecha y Hora</th>
                            <th>Motivo de Consulta</th>
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
                                <td>{appointment.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
