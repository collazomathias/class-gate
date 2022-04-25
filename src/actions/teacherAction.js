

const actionTeacherPost =(teacherPost)=> async (dispatch) =>{

    try {
        fetch("", {
            method: "POST",
            headers:{
                'Content-Type': 'aplication/json'
            }
        })
        .then()


    } catch (error) {
        
    }



}
export const teacherAction =()=>{
    return { actionTeacherPost };
}