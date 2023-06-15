import constants from "./constants";


const fetchDisabledFields=()=>{

    const disabledFields={
        title:false,
        assignee:false,
        status:false,
        description:false,
        priority:false
    }

    const userType=localStorage.getItem(constants.userAttributeFields.userType)

    if(userType === constants.userType.engineer){
        disabledFields.title=true;
        disabledFields.assignee=true;
        disabledFields.priority=true;
    }
    else if(userType === constants.userType.customer){
        disabledFields.assignee=true;
    }

    return disabledFields;
}

export default fetchDisabledFields;