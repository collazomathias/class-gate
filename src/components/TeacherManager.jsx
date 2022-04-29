import React, { useEffect } from "react";
import { teacherManagerAction } from "../actions/teacherManagerAction";
import { useDispatch, useSelector } from "react-redux";

export const TeacherManager = () => {

    const dispatch = useDispatch();

    const {teacherGroupGetAction} = teacherManagerAction();



    useEffect(() => {
        dispatch(teacherGroupGetAction())
    }, []);

    return (
        <h1>Gestión de maestro</h1>
    );
}