import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, XIcon } from "lucide-react";

import styles from './hambergStyle.module.css'

function Hamberg({className}) {
    const [clicked, setClicked] = useState(false);
    const handleNavClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setClicked(false);
    }
    const MotionMenu = motion.create(Menu);
    const MotionX = motion.create(XIcon);
    const handleClick = () => { setClicked((prev) => !prev) }
    return (
        <div className={className} >
                
                {!clicked ? (<MotionMenu key={'menu'} // eslint-disable-line
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{type:"spring",damping:15,stiffness:200}}
                    onClick={handleClick} />)
                    : 
                    <MotionX key={'x'} // eslint-disable-line
                        onClick={handleClick}
                        animate={{ rotate: 90, opacity: 1 }}
                        transition={{type:"spring",damping:15,stiffness:400,}}
                        exit={{ rotate: -90, opacity: 0 }} 
                    />
                    
                    }
            

            {clicked &&
                <div className={styles.dropdown}>
                    <button onClick={(e) => handleNavClick(e, '#home')}>Home</button>
                    <button onClick={(e) => handleNavClick(e, '#skills')}>Skills</button>
                    <button onClick={(e) => handleNavClick(e, '#experience')}>Experience</button>
                    <button onClick={(e) => handleNavClick(e, '#projects')}>Projects</button>
                    <button onClick={(e) => handleNavClick(e, '#education')}>Education</button>
                    <button onClick={(e) => handleNavClick(e, '#contact-me')}>Contact Me</button>
                </div>
            }


        </div>
    )
}

export default Hamberg;