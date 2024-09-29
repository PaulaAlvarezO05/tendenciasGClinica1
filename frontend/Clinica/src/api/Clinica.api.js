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