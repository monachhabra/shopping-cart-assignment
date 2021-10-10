import React, { useState } from 'react'

const Forms=()=>{

    const[userRegistration,setUserRegistration]= useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            psw:"",
            confirm_psw:""
        }
    )
    const handleInput=()=>{

    }
    return(
        <div class="mainclass">
            <div class="left">
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div class="right">
            		<form action="">
					
                    <div class="my-input">
					<input type="text"  autoComplete="off" 
                    name="firstName"
                    value={userRegistration.firstName}
                    onChange={handleInput}
                     id="firstName" required/>
					<label htmlFor="firstName">First Name</label>
                    </div>
                
                    <div class="my-input">
					<input type="text" autoComplete="off" 
                    name="lastName"
                    value={userRegistration.lastName}
                    onChange={handleInput}
                     id="lastName" required/>
					<label  htmlFor="lastName">Last Name</label>
                    </div>
                
                    <div class="my-input">
					<input type="email" autoComplete="off" 
                    name="Email"
                    value={userRegistration.email}
                    onChange={handleInput}
                     id="email" required/>
					<label  htmlFor="email">Email</label>
                    </div>

                    <div class="my-input">
					<input type="password" autoComplete="off"
                     name="Password"
                     value={userRegistration.psw}
                     onChange={handleInput}
                     id="password" required/>
					<label htmlFor="psw">Password</label> 
                    </div>

                    <div class="my-input">
					<input type="password" autoComplete="off"
                     name="Confirm Password" 
                     value={userRegistration.confirm_psw}
                     onChange={handleInput}
                     id="confirm_psw" required/>
					<label htmlFor="confirm_psw">Confirm Password</label>
                    </div>

                    <button type="submit">Signup</button>
                </form>
                </div>
        </div>
    )
}

export default Forms;