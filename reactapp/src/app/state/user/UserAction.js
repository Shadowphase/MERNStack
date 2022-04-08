import * as actionTypes from "../ActionTypes";

export const addUser = (user)=>{
    return{
        type:actionTypes.addUserToStore,
        payload: {user}
    }
}

export const addUser2 = (user)=>{
    return{
        type:actionTypes.addUser2ToStore,
        payload: {user}
    }
}

export const signInUser = (userObj)=>{
    return function (dispatch, getState){
        console.log("called by thunk");
        window.fetch("http://localhost:3131/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userObj)
            })
        .then(response => response.json())
        .then(userres => {
            console.log("repsonse ", userres);
            let action = addUser(userres);
            dispatch(action);
        })
        .catch((err)=>{
            console.log("Error while logging in ", err);
        });
    }
}

export const loginUser = (user)=>{
    return function (dispatch, getState){
        window.fetch("http://localhost:3131/user/api/login",
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
        .then(repsonse=>repsonse.json())
        .then(res => {
            console.log("reponse ", res);
            if(res.status==="invalid"){
                alert("Invalid username or password");
            }else{
                let action = addUser2(res);
                dispatch(action);
            }
        })
        .catch();
    }
}

export const resetData=()=>{
    return{
        type:actionTypes.emptyData
    }
}