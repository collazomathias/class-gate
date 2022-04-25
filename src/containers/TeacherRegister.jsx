import { TeacherForm } from "../components/TeacherForm";
import TeacherList from "../components/TeacherList";


export const TeacherRegister = () => {


    return (<>
    
        <div id="teacherDiv" className="container">
            <div className="row">
               
            <p>Bienvenido</p>
            <button className="btn btn-outline-secondary">Registrar Maestro</button>
            
            
            
            {/* <TeacherList/> */}
            <TeacherForm/>
            </div>
            </div>
            </>
    );
}