import React, { useEffect, useState } from "react";
import styles from '../ui/floatnav.module.css'
import { ArrowUpFromLine } from 'lucide-react';
export default function FloatingNav({ elementRef }) {
    const [isIntersect, setIsIntersect] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsIntersect(entry.isIntersecting);
                
            })
        }, {})
        observer.observe(elementRef.current)


        return (() => observer.disconnect())
    }, [])

    return (

        <a href="#home" >
            <ArrowUpFromLine
                className={styles.wrapper}
                style={{
                    opacity: isIntersect ? 0 : 1,
                    pointerEvents: isIntersect ? "none" : "auto",
                    transition: "opacity 0.6s ease"
                }} />
        </a>

    )

}