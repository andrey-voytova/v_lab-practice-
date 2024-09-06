
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { getUser, isLoggedIn, logOut } from "../../api/parse";

import styles from "./user.module.css";


export default function User() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      let loggedIn = await isLoggedIn();
      if (!loggedIn) {
        navigate("https://andrey-voytova.github.io/v_lab-practice-/login");
      }
  
      let user = await getUser();
      setEmail(user.getEmail());
  
      console.log("Your session token is: " + user.getSessionToken());
    })();
  }, [navigate]);

  const onLogout = async () => {
    await logOut();
    navigate("https://andrey-voytova.github.io/v_lab-practice-/login");
  }
  return (
    <div className={styles.container}>
      <h1>Hi</h1>
      <p>{email}</p>

      <button
      className={styles.button} 
      onClick={onLogout} >
        Log out
      </button>
    </div>
  )
}