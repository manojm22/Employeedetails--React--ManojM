import Head from './Head'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Notfound from './Notfound';
import React,{useState} from 'react';
import Edit from './Edit';
function App() {
  const [empdetails,setEmpdetails] = useState([]);
  const setempvalue=(e)=>{

    const value = e;
    setEmpdetails([...empdetails,value])
  }
  const deleteempvalue=(e)=>{
    const value = e;
    setEmpdetails(empdetails.filter(item=>item.id !== value))

  }
  const updatevalue=(e)=>{
    const value = e;
    setEmpdetails(empdetails.map((item)=>item.id===value.id?value:item))
  }
  return (
    <React.Fragment>
      <BrowserRouter>
      <Head/>
      <Routes>
        
        <Route exact path="/EmployeeDetails-Manoj.M" element={<Homepage func={setempvalue} emp={empdetails} deletefunc = {deleteempvalue}/>} />
        <Route exact path="/EmployeeDetails-Manoj.M/edit/:id" element={<Edit func={updatevalue} emp={empdetails} />}/>
        <Route exact path="*" element={<Notfound/>}/>     
        
      </Routes>
        
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
