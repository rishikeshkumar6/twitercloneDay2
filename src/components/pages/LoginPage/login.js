import React from 'react'
import GoogleButton from '../../atoms/button/google';
import AppleButton from '../../atoms/button/apple';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTwitter } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import styles from './login.module.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const SignIn = () => {
  const [email,setEmail]=useState("")
  
  const localEmail=email
  const handleClick=()=>{
    localStorage.setItem("email",email)
    alert("data stored successfully")
    
  }
  
   
  
  return (
    <div>
      
    <div className={styles.body}>
      <div className={styles.Icon}>
        <RxCross2 />
        <FaTwitter
          color='skyblue'
        />
      </div>
      <div className={styles.page}>
        <h1>Sign in to Twitter</h1>
        <br />
        <br />
        <GoogleButton />
        <br />
        <br />
        <AppleButton />
        <br />
        <br />
        <div className={styles.content3}>
          <span>or</span>
        </div>

        <br />
        <TextField
          style={{ width: "50%" }}
          id="outlined-basic"
          label="Phone , Email or Username"
          variant="outlined"
          onChange={e=>setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <Button
          className={styles.btn}
          style={{ textTransform: "none", background: "black", width: "50%", borderRadius: "5%" }}
          variant="contained"
          onClick={handleClick}
        >Next
        </Button>
        <br />
        <br />
        <Button className={styles.btn} variant="outlined"
          sx={{
            width: "50%", borderRadius: "5%", textTransform: "none", color: "black"
          }}><b>
            Forgot Password?</b>
        </Button>
        <div style={{ marginTop: "4rem", opacity: 0.8 }}><b>
          Don't have an account? </b><Link to="/register" >Sign up</Link>
        </div>
      </div>
    </div>

    </div>
        
  )
}

export default SignIn
