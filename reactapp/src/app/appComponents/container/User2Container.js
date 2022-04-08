import {connect} from "react-redux";
import User2Component from "../components/user/User2Component";
import {loginUser,resetData} from "../../state/user/UserAction";

let subscribe = (state)=>{
    return {
        user2: state.user2Reducer.user2
    }
}

let produce = (dispatch)=>{
    return {
        login:(user)=>{
            dispatch(loginUser(user));
        },
        reset:()=>{
            dispatch(resetData());
        }
    }
}

export default connect(subscribe, produce)(User2Component);