const actionAcudienteVerifier = (docId) => async (dispatch) => {
  try {
    fetch('https://class-gate.herokuapp.com/searchAcudiente/'+docId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data) {
            dispatch({
                type: "stateAcudiente",
                payload: data
            })
        }
    })
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
        payload: acudiente
    })
}

const actionNewStudent = (estudiante) => async (dispatch) => {
    dispatch({
        type: "stateNewStudent",
        payload: estudiante
    })
}

const actionCloseAlertMessage = () => async (dispatch) => {
  dispatch({
    type: "closeAlertMessage",
  });
};

const actionSaveAcudiente = (saveacudiente) => async (dispatch) => {
    console.log("hola")
    try {
      fetch('https://class-gate.herokuapp.com/addAcudiente', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(saveacudiente)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
    } catch (error) {
      dispatch({
        type: "alertMessage",
        payload: error.message,
      });
    }
  };

export const action = () => {
  return { actionAcudienteVerifier, actionNewAcudiente, actionNewStudent, actionSaveAcudiente, actionCloseAlertMessage };
};
