import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Editdiv = styled.div`
.heading{
display:flex;
flex-direction:row;
justify-content:space-between;
padding:0 15px;
background-color:grey;


p{
    padding:10px;
    background-color:blue;
    color:white;
    border-radius:10px;
    font-weight:600;
}

a{
    text-decoration:none;
    padding:10px 20px;
    margin:10px;
    border-radius:10px;
}

}
`
export default function Edit(props) {
    

    return (
        <Editdiv>
            <div className='heading'>
                <h3>System Task</h3>
                <NavLink to="/EmployeeDetails-Manoj.M" style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
            })}>Home</NavLink>
                
            </div>
        
        </Editdiv>
    )
}