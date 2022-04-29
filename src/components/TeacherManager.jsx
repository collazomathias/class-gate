import React, { useEffect } from "react";
import { teacherManagerAction } from "../actions/teacherManagerAction";
import { useDispatch, useSelector } from "react-redux";

export const TeacherManager = () => {

    const dispatch = useDispatch();

    const { group } = useSelector(state => state.teacherManagerReducer);

    const {teacherGroupGetAction} = teacherManagerAction();

    useEffect(() => {
        dispatch(teacherGroupGetAction())
    }, []);

    return (
        <>
            {group ?
                <div>
                    <h1>{`Usted es director del grupo: ${group.nombre}`}</h1>
                    <button>Información del grupo</button>
                </div>
                :
                <h1>Gestión de maestro</h1>
            }
            
        </>
    );
}