import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/GroupList.css";
import DataTable from "react-data-table-component";
import { actionGroup } from "../actions/actionGroup";

export const GroupList = () => {
    
    const dispatch = useDispatch();

    const { groups } = useSelector(state => state.groupReducer);
    
    const { actionGetGroups } = actionGroup();

    useEffect(() => {
        dispatch(actionGetGroups());
    }, [actionGetGroups, dispatch]);


    const columns = [
        {
            name: "ID",
            id: "columnId",
            selector: row => row.id,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray"
            }
        },
        {
            name: "Grupo",
            id: "columnGroup",
            selector: row => row.nombre,
            sortable: true,
            grow: 4,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray"
            }
        }
    ]

    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

    return (
        <div className="group-list-container">
            <div className="datatable-container">
                <DataTable className="group-list-table"
                    id={"tablita"}
                    columns={columns}
                    data={groups ? groups : null}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="calc(100vh - 195px)"
                    paginationComponentOptions={paginationLangConfig}
                />
            </div>
        </div>
    );
}