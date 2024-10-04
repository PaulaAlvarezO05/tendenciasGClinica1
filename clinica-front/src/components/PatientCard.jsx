import {useNavigate} from 'react-router-dom'


export function PatientCard({patients}){
   
   const navigate = useNavigate();
   
    return (
       <div style= {{background: "#101010"}}
        onClick={() => {
          navigate('/patients/' + patients.id )
       }}
       >
           <h1>{patients.full_name}</h1>
           <p>{patients.email}</p>
           <hr />
        </div>

    );

}