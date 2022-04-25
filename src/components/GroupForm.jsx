import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import "../assets/styles/components/GroupForm.css";
import { useDispatch } from "react-redux";
import { actionGroup } from "../actions/actionGroup.js";

export const GroupForm = () => {

    const dispatch = useDispatch();

    const { actionNewGroup } = actionGroup();

    const submitHandler = (event) => {
        event.preventDefault();
        const groupName = event.target.elements.inputGroupName.value;
        const groupGrade = event.target.elements.inputGroupGrade.value;
        const groupCourse = event.target.elements.selectGroupCourse.value;
        const newGroup = {
            groupName: groupName,
            groupGrade: groupGrade,
            groupCourse: groupCourse
        }
        dispatch(actionNewGroup(newGroup));
    }

    return (
        <form onSubmit={submitHandler} className="group-form-container">
            <div className="group-title-container">
                <h1>Nuevo grupo</h1>
            </div>
            <label htmlFor="inputGroupName">Nombre</label>
            <div className="input-container">
                <MdDriveFileRenameOutline className="group-input-icon" /> 
                <input id="inputGroupName" type="text" placeholder="Ingresa el nombre..." required />
            </div>
            <label htmlFor="inputGroupGrade">Grado</label>
            <div className="input-container">
                <MdDriveFileRenameOutline className="group-input-icon" /> 
                <input id="inputGroupGrade" type="text" placeholder="Ingresa el grado..." required />
            </div>
            <label htmlFor="selectGroupCourse">Curso</label>
            <select id="selectGroupCourse">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
            <button type="submit"><AiOutlineUsergroupAdd className="button-icon button-icon-add" /> Agregar grupo</button>
        </form>
    );
}