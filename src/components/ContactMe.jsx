import React, { useState } from "react"
import styles from './contactme.module.css';
import InputLabel from "../ui/InputLabel";
export default function ContactMe() {
    const [clicked, setClicked] = useState(false);
    function handleSubmit(event) {
        event.preventDefault()


    }

    return (
        <section id="contact-me">
            <div className="contianer">
                <div className="section-header">
                    <div className="section-number">05</div>
                    <h2 className="section-title">
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">Got a question? Got something in mind? Let’s make it happen.”</p>
                    <p className="section-subtitle">I’m always open to questions or collaborations.</p>
                </div>
                <div className={styles.formbox}>
                    <form onSubmit={handleSubmit}>
                        <fieldset >
                            <InputLabel placeholder={"Enter Your Name"}
                                name={"name"} >Name</InputLabel>
                            <InputLabel placeholder={"Enter Email"}
                                type="Email"
                                name={'email'} >Email</InputLabel>
                            <textarea placeholder="Type Message" />
                            <button
                                className={clicked ? styles.clicked : ''}
                                onClick={() => {
                                    setClicked(true)
                                    setTimeout(() => {
                                        setClicked(false)
                                    }, 600); 
                                }}
                            >Let' Get in Touch</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </section >

    )
}
