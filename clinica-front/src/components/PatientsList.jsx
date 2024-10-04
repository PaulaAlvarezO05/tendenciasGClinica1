import { useEffect } from "react"
import { getAllPatients } from "../api/patients.api"

export function PatientsList(){
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function loadPatients() {
            const res = await getAllPatients();
            setPatients(res.data);
        }
        loadPatients();
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', width: '100%' }} // Estilo opcional
            />

            {}
            {filteredPatients.map((patient) => (
                <PatientCard key={patient.id} patients={patient} />
            ))}
        </div>
    );
}