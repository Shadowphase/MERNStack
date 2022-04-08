import {connect} from "react-redux";
import UserComponenet from "../components/user/UserComponent";
import {addUser, signInUser} from "../../state/user/UserAction";

let mapStateToProps = (state)=>{
    return {
        user: state.UserReducer.user
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addUserToStore: (user)=>{
            dispatch(addUser(user));
        },
        addUserToStoreDB: (user)=>{
            dispatch(signInUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponenet);