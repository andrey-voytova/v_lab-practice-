import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doUserLogIn } from "../../api/parse";

import styles from './login.module.css';

export default function Login()  {

    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
    
        if (!email || !password) {
          setError("Please enter your username and password.")
          return
        }
    
        setError("")
    

        try {
          let user = await doUserLogIn(email, password)
          navigate("https://andrey-voytova.github.io/v_lab-practice-/user")
        } catch (error) {
          console.error(error.message)
          setError(error.message)
        }
      }
    return(
        <div className={styles.container}>
            <h1>Login</h1>
            {error && <div>{error}</div>}
            <form className={styles.form} onSubmit={onSubmit}>
                <input 
                    className={styles.input}
                     label="Email"
                    type="Email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className={styles.input}
                    label="Password"
                    type="password" 
                    id="password"
                    name="Password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.button} type="submit">Login</button>
                <p> Don't have an account yet? <Link to={"https://andrey-voytova.github.io/v_lab-practice-/register"}>Register</Link></p>
            </form>
        </div>
    )
}