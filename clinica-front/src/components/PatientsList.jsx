import { useEffect, useState } from "react";
import { getAllPatients } from "../api/patients.api";
import { PatientCard } from "./PatientCard";

export function PatientsList() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda

    useEffect(() => {
        async function loadPatients() {
            const res = await getAllPatients();
            setPatients(res.data);
        }
        loadPatients();
    }, []);

    // Filtrar pacientes basado en el término de búsqueda
    const filteredPatients = patients.filter(patient =>
        patient.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="grid grid-cols-3 gap-3">
            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', width: '100%' }} // Estilo opcional
            />

            {/* Renderizar tarjetas de pacientes filtradas */}
            {filteredPatients.map((patient) => (
                <PatientCard key={patient.id} patients={patient} />
            ))}
        </div>
    );
}
