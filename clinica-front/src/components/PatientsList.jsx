import { useEffect } from "react"
import { getAllPatients } from "../api/patients.api"

export function PatientsList(){
 
 useEffect(() => {

 async function loadPatients(){
     const res = await getAllPatients()
     console.log(res)
 }
 loadPatients();
 }, []);
 
 return(
    <div>PatientsList</div>
 )
}