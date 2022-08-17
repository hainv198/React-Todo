import React, {useState} from 'react';
import image from '../../image/Atm.png'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import {useEffect} from "react";


const LoginAccount = () => {
    const [cardNum, setCardNum] = useState('')
    const [cardPassword, setCardPassword] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('user_info')) {
            navigate('/main')
        }
    },[])

    async function login() {
        if(cardNum === '' && cardPassword === '') {
            alert('Please enter enough value ')
        }
        let item = {cardNum, cardPassword}
        console.log(item)
        let result = await fetch('http://localhost:8080/api/auth/signin/', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("user_info", JSON.stringify(result))
        navigate('/main')
    }
    return (
        <div style={{marginTop:100}}>
            <h1>Sign in</h1>
            <div className='row mt-5' style={{width:'80%', margin:'auto'}}>
                <div className='col-md-6 col-lg-6'>
                    <img src={image}
                         alt=""
                         width='100%'
                    />
                </div>
                <div className='col-md-6 col-lg-6 mt-5'>
                    <input type="number"
                           placeholder='number id'
                           value={cardNum}
                           onChange={(e) => setCardNum(e.target.value)}

                    />
                    <input type="password"
                           className="form-control"
                           id="validationCustom02"
                           value={cardPassword}
                           onChange={(e) => setCardPassword(e.target.value)}
                           required
                    />
                    <Button type="button" onClick={login}>Submit form</Button>

                </div>

            </div>
        </div>

    );
};

export default LoginAccount;