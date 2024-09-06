import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doUserRegistration } from "../../api/parse";

import styles from '../login/login.module.css';

export default function Register()  {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault()
  
      if (!email || !password ) {
        setError("Please fill out all the fields.");
        return
      }
  
      setError("")
  
      console.log("Registering...")
  
      let username = email.split("@")[0]
      try {
        let user = await doUserRegistration(username, password)
        user.setEmail(email).save()
        navigate("/user")
      } catch (error) {
 
        setError(error.message)
      }
    }

    

    return(
        <div className={styles.container}>
            <h1>Register</h1>
            {error && <div>{error}</div>}
            <form className={styles.form} onSubmit={onSubmit} >
                <input 
                    className={styles.input}
                    label="Email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className={styles.input}
                    label="Password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className={styles.button} type="submit">Register</button>
                <p> Already have an account? <Link to={"https://andrey-voytova.github.io/v_lab-practice-/login"}>Login</Link></p>
            </form>
        </div>
    )
}