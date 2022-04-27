import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import "../assets/styles/components/GroupForm.css";
import { useDispatch } from "react-redux";
import { actionGroup } from "../actions/actionGroup.js";

export const GroupForm = ({ editGroupData,
                            isEditingGroup,
                            setEditGroupData,
                            setIsEditingGroup }) => {

    const dispatch = useDispatch();


    const { actionNewGroup, actionEditGroup } = actionGroup();

    const submitHandler = (event) => {
        event.preventDefault();
        const groupName = event.target.elements.inputGroupName.value;
        const groupGrade = event.target.elements.inputGroupGrade.value;
        const groupCourse = event.target.elements.selectGroupCourse.value;

        if(isEditingGroup) {
            const groupId = editGroupData.groupId;
            const editedGroup = {
                id: groupId,
                nombre: groupName,
                grado: groupGrade,
                curso: groupCourse
            }
            setIsEditingGroup(false);
            dispatch(actionEditGroup(editedGroup));
        } else {
            const newGroup = {
                nombre: groupName,
                grado: groupGrade,
                curso: groupCourse
            }
            dispatch(actionNewGroup(newGroup));
        } 
        event.target.reset();
    }

    const cancelEditing = () => {
        setEditGroupData(null);
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
                <input id="inputGroupName" type="text" defaultValue={ isEditingGroup ? editGroupData.groupName : ""} placeholder="Ingresa el nombre..." required />
            </div>
            <label htmlFor="inputGroupGrade">Grado</label>
            <div className="input-container">
                <MdDriveFileRenameOutline className="group-input-icon" /> 
                <input id="inputGroupGrade" type="number" min="1" max="11" defaultValue={ isEditingGroup ? editGroupData.groupGrade : ""} placeholder="Ingresa el grado..." required />
            </div>
            <label htmlFor="selectGroupCourse">Curso</label>
            <select id="selectGroupCourse">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
            <div className="button-form-container">
                <button type="submit"><AiOutlineUsergroupAdd className="button-icon button-icon-add" />{isEditingGroup ? "Editar grupo" : "Agregar grupo"}</button>
                { isEditingGroup ? <button onClick={ () => cancelEditing() } title={ "Cancelar edición" } className="clean-button">{ <MdCleaningServices /> }</button> : null }
            </div>
        </form>
    );
}