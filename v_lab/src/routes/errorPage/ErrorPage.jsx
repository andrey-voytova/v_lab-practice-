import { useRouteError } from "react-router-dom";
import styles from "./errorPage.module.css"

export default function ErrorPage() {

    const error = useRouteError()

    return(
        <div className={styles.container}>
            <h1>Oops</h1>
            <p>Houston we have a problem</p>

        </div>
    )
}