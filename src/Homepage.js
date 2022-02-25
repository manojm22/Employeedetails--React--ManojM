import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'; 

const Form = styled.div`

.textfield{
    padding: 5px 0;
    font-size: 16px; 
    margin: 10px 0;
    border:none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
}

width: 100%;
form{
    display:flex;
    
    width: 100%;
    border-collapse: collapse;
    flex-direction:row;
    button{
        height: 100%;
    margin-top: 70px;
    }
    @media screen and (max-width: 960px) {
        flex-direction:column;
    
    }
}


`

const Row = styled.div`
display:flex;
flex-direction:column;

padding:0 10px;
`


const Tablestyle = styled.div`
overflow-x:auto;
table, td, th {
    border: 1px solid;
    
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

td{
    text-align: center;
    vertical-align: middle;
}



button{
    border: none;
    background-color: #008CBA;
    color: white;
    text-align: center;
    padding:10px 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.delete{
    background-color: red;

}

.paginate
{
    background-color: grey;
    :disabled {
        cursor:not-allowed;
      }
}

h1{
    display:flex;
    justify-content:center;
    align-items:center;
}

a{
    text-decoration:none;
    padding:10px 20px;
    margin-bottom:20px;
    border-radius:10px;
}
`

export default function Homepage(props){


    const [employees,Setemployee] = useState(props.emp);
    const [prev,setPrev] = useState(0);
    const [next,setNext] = useState(10);
    var num = 0;


    useEffect(()=>{
        Setemployee(props.emp);
    })




    const handleAddFormSubmit = (e) => {
        try{
        e.preventDefault();
    
        const newvalue = {
            id:uuidv4(),
            fullName: e.target.fullName.value,
            address: e.target.address.value,
            phoneNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
        };


        props.func(newvalue);
        
        alert("added!!")

        Setemployee(props.emp);

    }
    catch(e){
        alert(e);
    }


        
    };
    


    const handleDeleteClick = async(id) => {

        props.deletefunc(id)

        Setemployee(props.emp)
    };

    const nextvalue=()=>{
        setNext(next + 10)
        setPrev(prev + 10)
        console.log(next)
    }

    const prevvalue=()=>{
        setNext(next - 10)
        setPrev(prev - 10)
    }


    return (
        <Tablestyle>
            <h1>EMPLOYEE DETAILS</h1>
            <Form>
        <form onSubmit={handleAddFormSubmit}>
            <Row>
            <h4>Name:</h4>
            <input type="text" name='fullName' className='textfield' required/>
            </Row>
            <Row>
            <h4>Address:</h4>
            <input type="text" name='address' className='textfield' required/>
            </Row>
            <Row>
            <h4>Phone number:</h4>
            <input type="tel" name="phoneNumber" placeholder="9876543210" pattern="[0-9]{10}" required
  className='textfield' required/>
            </Row>
            <Row>
            <h4>Email:</h4>
            <input type="email" name='email' placeholder="example@example" className='textfield' required/>
            </Row>

            <button>Add</button>
        </form>
    </Form>
                
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees? <React.Fragment>
                        
                        {employees.slice(prev,next).map((employee) => {

                            
                            num = num + 1;
                            
                            return(
                        <tr key={employee.id}>
                            <td>{employee.fullName}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.email}</td>
                            <td>
                                <NavLink to={`edit/${employee.id}`}><button className ="button">EDIT</button></NavLink>
                            </td>
                            <td><button className ="button delete" onClick={()=>{handleDeleteClick(employee.id)}}>DELETE</button></td>  
                                 
                        </tr>
                        
                    )

                    
                    
                    })}</React.Fragment>:null}
                </tbody>
            </table>
            <button  className ="button paginate" onClick={prevvalue} disabled={next===10?true:false}>Previous</button>
            <button  className ="button paginate" onClick={nextvalue} disabled={next>=(employees?employees.length:10)?true:false}>Next</button>
        </Tablestyle>
    )
}
