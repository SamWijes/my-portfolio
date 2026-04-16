import React, { useId } from 'react';
import styles from './inputlabel.module.css'
export default function InputLabel({ name, placeholder, required = false, type = "text", children, className }) {
    const id = useId()

    return (
        <div className={styles.wrapper}>

            <label htmlFor={`${id}-${name}`} className={className}>
                {children} {""}
            </label>
            <input placeholder={placeholder} required={required}
                type={type} id={`${id}-${name}`} name={name} />

        </div>
    )
}