import React, { useRef, useState } from "react"
import styles from './contactme.module.css';
import InputLabel from "../ui/InputLabel";
import emailjs from '@emailjs/browser';
import Toast from "../ui/Toast";


export default function ContactMe() {
    // dotenv.config()
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState({name:'',email:'',subject:'',message:''});
    const [toast, setToast] = useState(false);
    const formRef=useRef();
   
    
    function handleSubmit(event) {
        event.preventDefault()
        setClicked(true)
        setToast(true)
        setTimeout(() => {setClicked(false)}, 600);
        setTimeout(() => {setToast(false)}, 3000);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            },
        );
        setValue({name:'',email:'',subject:'',message:''});

    }



    return (
        <section id="contact-me">
            <div className="contianer">
                <div className="section-header">
                    <div className="section-number">05</div>
                    <h2 className="section-title">
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">Got a question? Got something in mind? Let’s make it happen.</p>
                    <p className="section-subtitle">I’m always open to questions or collaborations.</p>
                </div>
                {toast&&<Toast variant="success" message="Message sent"/>}
                
                <div className={styles.formbox}>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <fieldset >
                            <InputLabel value={value.name} required placeholder={"Enter Your Name"}
                                name={"name"} 
                                onChange={(e)=>setValue(prev=>({...prev,['name']:e.target.value}))}
                                >Name</InputLabel>
                            <InputLabel value={value.email} required placeholder={"Enter Email"}
                                type="Email"
                                 onChange={(e)=>setValue(prev=>({...prev,['email']:e.target.value}))}
                                name={'email'} >Email</InputLabel>
                            <InputLabel value={value.subject} required placeholder={"What is your message about?"}
                                name={'title'} 
                                 onChange={(e)=>setValue(prev=>({...prev,['subject']:e.target.value}))}
                                >Subject</InputLabel>
                            <textarea value={value.message} name="message" placeholder="Type Message" 
                             onChange={(e)=>setValue(prev=>({...prev,['message']:e.target.value}))}
                            />
                            <button
                                className={clicked ? styles.clicked : ''}
                                
                            >Let' Get in Touch</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </section >

    )
}
