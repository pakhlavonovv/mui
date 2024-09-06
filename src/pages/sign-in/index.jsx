import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import './sass/style.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../utils/notification';

const Index = () => {
  const [ form, setForm ] = useState({})
  const navigate = useNavigate()
  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.username == 'Admin'){
        navigate('/admin')
        Notification({title: "Success", type: 'success '})

    } else if(form.username == 'Student'){
      navigate('/student')
    } else {
      Notification({title: 'Somewhere have an error, please try again', type: 'error'})
    }
  } 

  return (
    <div>
      <div className="container mt-5">
      <ToastContainer />
        <div className="row">
          <div className="col-md-4 offset-3">
            <div className="card bg-body-secondary" style={{width: "500px"}}>
              <div className="card-header">
                <h1 className='text-center'>Sign In</h1>
              </div>
              <div className="card-body">
                <form id='form' style={{display: "flex", flexDirection: 'column', gap: '6px'}} onSubmit={handleSubmit}>
              <TextField fullWidth label="Username" name='username' onChange={handleChange}/>
              <TextField fullWidth type='email' label="Email" name='email' onChange={handleChange}/>
              <TextField fullWidth type='password' label="Password" name='password' onChange={handleChange}/>
              <TextField fullWidth type='confirm_pass' label="Confirm Password" name='confirm_password' onChange={handleChange}/>
                </form>

              </div>
              <div className="card-footer">
                <center>
              <Button style={{width: "130px"}} variant="contained" type='submit' form='form'>Save</Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index