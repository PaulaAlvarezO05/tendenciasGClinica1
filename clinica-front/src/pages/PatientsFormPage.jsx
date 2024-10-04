import { useEffect, useState} from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createPatient, deletePatient, updatePatient, getPatient, getAllPatients } from '../api/patients.api';
import { useNavigate, useParams } from 'react-router-dom';

export function PatientsFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function loadPatients() {
         const res = await getAllPatients();
         setPatients(res.data);
     }

    useEffect(() => {
        loadPatients();
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updatePatient(params.id, data);
            alert(`Se ha actualizado la información del paciente ${data.full_name} con éxito`);
        } else {
            await createPatient(data);
            alert(`Se ha creado el paciente ${data.full_name} con éxito`);
        }
        navigate('/patients');
    });

    useEffect(() => {
        async function loadPatient() {
            if (params.id) {
                const res = await getPatient(params.id);
                console.log(res);
                setValue("full_name", res.data.full_name);
                setValue("birth_date", res.data.birth_date);
                setValue("gender", res.data.gender);
                setValue("address", res.data.address);
                setValue("phone_number", res.data.phone_number);
                setValue("email", res.data.email);
                setValue("emergency_contact_name", res.data.emergency_contact_name);
                setValue("emergency_contact_phone", res.data.emergency_contact_phone);
                setValue("insurance_company", res.data.insurance_company);
                setValue("policy_number", res.data.policy_number);
                setValue("policy_status", res.data.policy_status);
                setValue("policy_expiry", res.data.policy_expiry);
            }
        }
        loadPatient();
    }, [params.id, setValue]);

    return (
        <div>
            <h2>Formulario de Información Personal</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="full_name">Nombre Completo:</label>
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    {...register("full_name", { required: true })}
                />
                {errors.full_name && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="birth_date">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="birth_date"
                    name="birth_date"
                    {...register("birth_date", { required: true })}
                />
                {errors.birth_date && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="gender">Género:</label>
                <select
                    id="gender"
                    name="gender"
                    {...register("gender", { required: true })}
                >
                    <option value="">Seleccione una opción</option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                    <option value="O">Otro</option>
                </select>
                {errors.gender && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    {...register("address", { required: true })}
                />
                {errors.address && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="phone_number">Número de Teléfono:</label>
                <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    {...register("phone_number", { required: true })}
                />
                {errors.phone_number && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>Este campo es requerido!</span>}
                <br /><br />

                <h3>Contacto de Emergencia</h3>

                <label htmlFor="emergency_contact_name">Nombre del Contacto de Emergencia:</label>
                <input
                    type="text"
                    id="emergency_contact_name"
                    name="emergency_contact_name"
                    {...register("emergency_contact_name", { required: true })}
                />
                {errors.emergency_contact_name && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="emergency_contact_phone">Teléfono del Contacto de Emergencia:</label>
                <input
                    type="tel"
                    id="emergency_contact_phone"
                    name="emergency_contact_phone"
                    {...register("emergency_contact_phone", { required: true })}
                />
                {errors.emergency_contact_phone && <span>Este campo es requerido!</span>}
                <br /><br />

                <h3>Información de Seguro</h3>

                <label htmlFor="insurance_company">Compañía de Seguro:</label>
                <input
                    type="text"
                    id="insurance_company"
                    name="insurance_company"
                    {...register("insurance_company", { required: true })}
                />
                {errors.insurance_company && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="policy_number">Número de Póliza:</label>
                <input
                    type="text"
                    id="policy_number"
                    name="policy_number"
                    {...register("policy_number", { required: true })}
                />
                {errors.policy_number && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="policy_status">Estado de Póliza:</label>
                <select
                    id="policy_status"
                    name="policy_status"
                    {...register("policy_status", { required: true })}
                >
                    <option value="">Seleccione una opción</option>
                    <option value="active">Activa</option>
                    <option value="inactive">Inactiva</option>
                </select>
                {errors.policy_status && <span>Este campo es requerido!</span>}
                <br /><br />

                <label htmlFor="policy_expiry">Fecha de Expiración de la Póliza:</label>
                <input
                    type="date"
                    id="policy_expiry"
                    name="policy_expiry"
                    {...register("policy_expiry", { required: true })}
                />
                {errors.policy_expiry && <span>Este campo es requerido!</span>}
                <br /><br />

                <input type="submit" value="Guardar" />

                {params.id && (
                    <button 
                        type="button"
                        onClick={async () => {
                            const accepted = window.confirm('¿Estás seguro de eliminar el paciente?');
                            if (accepted) {
                                await deletePatient(params.id);
                                alert('El paciente ha sido eliminado con éxito.');
                                navigate('/patients');
                            }
                        }}
                    >
                        Borrar
                    </button>
                )}
            </form>
        </div>
    );
}
