const actionAcudienteVerifier = (docId) => async (dispatch) => {
  try {
    fetch("https://class-gate.herokuapp.com/searchAcudiente/" + docId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.documentoIdentidad) {
          return dispatch({
            type: "stateAcudiente",
            payload: data,
          });
        }
        
        alert("No se encontro el acudiente");
        dispatch({
          type: "AcudienteNotFound",
          payload: null,
        });
      });
  } catch (error) {
    dispatch({
      type: "alertMessage",
      payload: error.message,
    });
  }
};

const actionNewAcudiente = (acudiente) => async (dispatch) => {
  dispatch({
    type: "stateNewAcudiente",
    payload: acudiente,
  });
};

const actionNewStudent = (estudiante) => async (dispatch) => {
  dispatch({
    type: "stateNewStudent",
    payload: estudiante,
  });
};

const actionCloseAlertMessage = () => async (dispatch) => {
  dispatch({
    type: "closeAlertMessage",
  });
};

const actionSaveAcudiente = (saveAcudiente) => async (dispatch) => {
  try {
    fetch("https://class-gate.herokuapp.com/addAcudiente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveAcudiente),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "acudienteSaved",
        });
      });
  } catch (error) {
    dispatch({
      type: "alertMessage",
      payload: error.message,
    });
  }
};

const actionSaveEstudiante = (saveEstudiante) => async (dispatch) => {
  try {
    fetch("https://class-gate.herokuapp.com/addEstudiante", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveEstudiante),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    dispatch({
      type: "alertMessage",
      payload: error.message,
    });
  }
};

export const action = () => {
  return {
    actionAcudienteVerifier,
    actionNewAcudiente,
    actionNewStudent,
    actionSaveAcudiente,
    actionSaveEstudiante,
    actionCloseAlertMessage,
  };
};
