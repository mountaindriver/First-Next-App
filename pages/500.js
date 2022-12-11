import Layout from "../components/layout";
import alert from "../styles/alert.module.css"


// pages/404.js
export default function Custom404() {
    return (
        <Layout>
            <section >
                <h1 > Sorry, something went wrong</h1>
                <h2 className={alert.error}>500 - Server-side error occurred</h2>
            </section>
        </Layout>
    )
}