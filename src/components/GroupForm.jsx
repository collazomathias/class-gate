import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import "../assets/styles/components/GroupForm.css";
import { useDispatch } from "react-redux";
import { actionGroup } from "../actions/actionGroup.js";

export const GroupForm = ({ isEditingGroup, 
                            groupEditingId, 
                            groupEditingName, 
                            groupEditingGrade, 
                            groupEditingCourse, 
                            setGroupEditingId, 
                            setGroupEditingName, 
                            setIsEditingGroup, 
                            setGroupEditingGrade, 
                            setGroupEditingCourse }) => {

    const dispatch = useDispatch();

    const { actionNewGroup, actionEditGroup } = actionGroup();

    const submitHandler = (event) => {
        event.preventDefault();
        const groupId = groupEditingId;
        const groupName = event.target.elements.inputGroupName.value;
        const groupGrade = event.target.elements.inputGroupGrade.value;
        const groupCourse = event.target.elements.selectGroupCourse.value;
        if(isEditingGroup) {
            const editedGroup = {
                id: groupId,
                nombre: groupName,
                grado: groupGrade,
                curso: groupCourse
            }
            setIsEditingGroup(false);
            console.log(editedGroup);
            //dispatch(actionEditGroup(editedGroup));
        } else {
            const newGroup = {
                nombre: groupName,
                grado: groupGrade,
                curso: groupCourse
            }
            console.log(newGroup);
            //dispatch(actionNewGroup(newGroup));
        } 
        event.target.reset();
    }

    const cancelEditing = () => {
        setGroupEditingId(null);
        setGroupEditingName("");
        setGroupEditingGrade("");
        setGroupEditingCourse("");
        setIsEditingGroup(false);
    }

    return (
        <form onSubmit={submitHandler} className="group-form-container">
            <div className="group-title-container">
                <h1>{ isEditingGroup ? "Editar grupo" : "Agregar grupo"}</h1>
            </div>
            <label htmlFor="inputGroupName">Nombre</label>
            <div className="input-container">
                <MdDriveFileRenameOutline className="group-input-icon" /> 
                <input id="inputGroupName" type="text" defaultValue={ isEditingGroup ? groupEditingName : ""} placeholder="Ingresa el nombre..." required />
            </div>
            <label htmlFor="inputGroupGrade">Grado</label>
            <div className="input-container">
                <MdDriveFileRenameOutline className="group-input-icon" /> 
                <input id="inputGroupGrade" type="text" defaultValue={ isEditingGroup ? groupEditingGrade : ""} placeholder="Ingresa el grado..." required />
            </div>
            <label htmlFor="selectGroupCourse">Curso</label>
            <select id="selectGroupCourse" value={ isEditingGroup ? groupEditingCourse : "A" } onChange={ (event) => this.inputChangedHandler(event) }>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">C</option>
                <option value="E">C</option>
            </select>
            <div className="button-form-container">
                <button type="submit"><AiOutlineUsergroupAdd className="button-icon button-icon-add" />{isEditingGroup ? "Editar grupo" : "Agregar grupo"}</button>
                { isEditingGroup ? <button onClick={ () => cancelEditing() } title={ "Cancelar edición" } className="clean-button">{ <MdCleaningServices /> }</button> : null }
            </div>
        </form>
    );
}