import React, { useEffect, useState } from "react";
import { X,CircleCheck,ShieldAlert,Info } from "lucide-react";
import styles from './Toast.module.css'

export default function Toast({variant='info',message='Test Message'}) {
    const [isClicked,setIsClicked]=useState(true)
    const VARIANT_ICON={
        warning:ShieldAlert,
        info:Info,
        success:CircleCheck
    }
    const Icon =VARIANT_ICON[variant]
    useEffect(()=>{
        const timerId= setTimeout(()=>setIsClicked(false),3000);


        return(()=>clearTimeout(timerId))
    },[])
   

    return(
        <>{isClicked && 
        <div className={`${styles.wrapper} ${styles[variant]}`}>
            <Icon className={`${styles.icon}`} />
            <span>{message}</span>
            <X onClick={()=>setIsClicked(false)}  className={`${styles.close}  `}   size={24}/>
        </div>
        
        }
        
        </>
    )
}