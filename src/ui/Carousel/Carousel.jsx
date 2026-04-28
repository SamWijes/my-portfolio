import React, { useState } from "react";
import { ChevronRightCircleIcon,
    ChevronLeftCircleIcon,

 } from "lucide-react";

import styles from './Carousel.module.css'

import Modal from "../Modal/Modal";

function Carousel({pictures,className}) {
    const[curIndex,setCurIndex]=useState(0);
    const[clicked,setClicked]=useState(false)
    // const[rotation,setRotaiton]=useState([...pictures.slice(0,3)])
    const MAX_INDEX=pictures.length-1;
    // console.log(rotation,MAX_INDEX,curIndex)
    
  const rotation = pictures.map((_, index) => {
    return pictures[(curIndex + index) % pictures.length];
  });

  function handleRight() {
    setCurIndex((prev) => (prev > 0 ? prev - 1 : MAX_INDEX));
  }

  function handleLeft() {
    setCurIndex((prev) => (prev < MAX_INDEX ? prev + 1 : 0));
  }

    return(
        <div className={`${styles.wrapper} ${className}`} >
            
            <div className={styles.container} style={clicked ? { inset: '0',padding:'20px',margin:'0px', position: 'fixed', cursor: 'pointer' } : undefined}>
                <div className={styles.img1}  style={{backgroundImage:`url("${rotation[0]}")`}}>
                    <ChevronLeftCircleIcon onClick={handleLeft} className={styles.licon}  size={'5rem'} />
                </div>
                <div className={styles.img2} onClick={()=>setClicked((prev)=>!prev)} style={{backgroundImage:`url("${rotation[1]}")`}}>
                    {/* <img src={pictures[1]} alt="" /> */}
                </div>
                
                <div className={styles.img3}  style={{backgroundImage:`url("${rotation[2]}")`}}>
                   <ChevronRightCircleIcon onClick={handleRight} className={styles.ricon} size={'5rem'}/>
                </div>
            </div>
           
            {/* {clicked && <img src={rotation[1]} onClick={()=>setClicked(false)} style={{inset:'0',position:'fixed',cursor:'pointer'}}/>} */}
        </div>
    )
}

export default Carousel;