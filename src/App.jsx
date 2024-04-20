// import './App.css';
// import Register from './Register';
import React from "react";
// import LoginForm from './LoginForm';
import { BasicTable } from './Component/BasicTable';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }
    return ( 
      <div className = "App">
      {/* {
        currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }  */}
      <BasicTable />
      </div>
    )
}

export default App;