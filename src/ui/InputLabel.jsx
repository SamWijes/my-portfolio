import React, { useId } from 'react';
import styles from './inputlabel.module.css'
export default function InputLabel({ name, type = "text", children, className ,...delegated}) {
    const id = useId()

    return (
        <div className={styles.wrapper}>

            <label htmlFor={`${id}-${name}`} className={className} >
                {children} {""}
            </label>
            <input type={type} id={`${id}-${name}`} name={name} {...delegated}/>

        </div>
    )
}