import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'; 
import { useParams } from 'react-router-dom'

const Form = styled.div`

h2{
    display:flex;
    justify-content:center;
    align-items:center;
}

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
        border: none;
        background-color: #008CBA;
        color: white;
        text-align: center;
        padding:10px 20px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
    }
    @media screen and (max-width: 960px) {
        flex-direction:column;
        button{
            width:100px;
            margin-left:10px;
        }
    
    }
}


`

const Row = styled.div`
display:flex;
flex-direction:column;

padding:0 10px;
`


export default function Edit(props) {
    const {id} = useParams();

    const [employees,Setemployee] = useState([{
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        id: null
      }]);

    useEffect(async()=>{
        const value = props.emp.filter(item=> item.id === id);
        Setemployee(value[0]);

    },[]);

    const handleAddFormSubmit = async(e) => {

        try{
        e.preventDefault();
    
        const newvalue = {
          fullName: e.target.fullName.value,
          address: e.target.address.value,
          phoneNumber: e.target.phoneNumber.value,
          email: e.target.email.value,
          id:employees.id
          
        };
        props.func(newvalue);
        alert("UPDATED!!");


    }

    catch(e){
        alert(e);
    }




        
      };

      const handlechange=(e)=>{
          Setemployee({...employees,[e.target.name]:e.target.value})
      }
  return (
      
    <Form>
        <h2>EDIT PAGE</h2>
    <form onSubmit={handleAddFormSubmit}>
        <Row>
        <h4>Name:</h4>
        <input type="text" name='fullName' value={employees.fullName?employees.fullName:""} onChange={handlechange} className='textfield' required/>
        </Row>
        <Row>
        <h4>Address:</h4>
        <input type="text" name='address' value={employees.address?employees.address:""} onChange={handlechange} className='textfield' required/>
        </Row>
        <Row>
        <h4>Phone number:</h4>
        <input type="tel" name="phoneNumber" value={employees.phoneNumber?employees.phoneNumber:""} onChange={handlechange} placeholder="ex:9876543210" pattern="[0-9]{10}" required
className='textfield' required/>
        </Row>
        <Row>
        <h4>Email:</h4>
        <input type="email" name='email' value={employees.email?employees.email:""} onChange={handlechange} className='textfield' required/>
        </Row>

        <button>Update</button>
    </form>
</Form>
  )
}
