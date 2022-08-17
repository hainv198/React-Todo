import React, {useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Demo = () => {
    const notify = () => toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const Error = () => {
        return(
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        )
    }

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        if(name === '' && address === '' && phone === '') {
            return alert("Plese ...")
        }
        e.preventDefault()
        console.log(name, address, phone)
        setError('')
        axios.post('http://localhost:8080/customer/', {
            name:name,
            address:address,
            phone:phone
        })
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                setError(err.message)
                alert(err.message)
            })
        navigate('/sign_account')
    }


return (
        <div style={{width:'70%', margin:'auto'}}>
            <form className="row g-3 needs-validation mt-5" noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Name</label>
                    <input type="text"
                           className="form-control"
                           id="validationCustom01"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Phone</label>
                    <input type="number"
                           className="form-control"
                           id="validationCustom02"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Address</label>
                    <input type="phone"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                           className="form-control"
                           id="validationCustom03"
                           required/>
                        <div className="invalid-feedback">
                            Please provide a valid address
                        </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={handleLogin}>Submit form</button>
                </div>
            </form>

        </div>
    );
};

export default Demo;