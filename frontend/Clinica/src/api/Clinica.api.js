import axios from 'axios'

const clinicaApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const getAppointments = () => {
    return clinicaApi.get('/appointments/')
}

export const getPatients = () => {
    return clinicaApi.get('/patients/')
}

export const getMedicos = () => {
    return clinicaApi.get('/users/')
}

export const getConsultationType = () => {
    return clinicaApi.get('/consultationType/')
}
export const addPatient = async (patientData) => {
    try {
        const response = await clinicaApi.post('/patients/', patientData);
        return response.data; // Retorna la respuesta de la API, puede ser útil para manejar la respuesta
    } catch (error) {
        console.error('Error al agregar el paciente:', error);
        throw error; // Lanza el error para que se pueda manejar en el componente
    }
};