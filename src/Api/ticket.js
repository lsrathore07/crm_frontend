import axios from 'axios';

const BASE_URL = process.env.REACT_APP_CRM_BECKEND_URL;

export async function getAllTickets(data){
    return axios.get(`${BASE_URL}/crm/api/v1/tickets`,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    });
}
export async function updateTicket(ticket){
    console.log("hello");
    return axios.put(`${BASE_URL}/crm/api/v1/tickets/${ticket._id}`,ticket,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    });
}

export async function createNewTicket(ticket){
   
    return axios.post(`${BASE_URL}/crm/api/v1/tickets/`,ticket,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}

export async function deleteTicket(id){
    return axios.delete(`${BASE_URL}/crm/api/v1/tickets/${id}`,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}