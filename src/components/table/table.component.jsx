import React, {useState,useEffect} from "react";
import './table.styles.css'
import Row from "../row/row.component";
import Details from "../details/details.component";
const Table = () =>{

    const [users,setUsers]= useState([]);
    const [userDetails, setUserDetails] = useState();
    const getUserData = async() => {
        try{
            const apiUrl = `https://jsonplaceholder.typicode.com/todos`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setUsers(data);
        }catch(error){
            console.log(error);
        }
    }
    const getUserDetails = async(id) => {
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUserDetails(data);
    }
    const detailsBtnHandler = (userId) => {
        getUserDetails(userId);
    } 
    useEffect(()=>{
        getUserData();
    },[])
 console.log(userDetails);
        return(
            <div className="table-div">
                <table>
                    <thead>
                    <tr>
                        <th>ToDo ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
            
                    {users.map((user)=>(<Row key={user.id} user={user} detailsBtnHandler={detailsBtnHandler}/>))}
             
                    
                </table>
                {userDetails?<Details userDetails={userDetails}/>:''}
            </div>
        )
    }

export default Table;