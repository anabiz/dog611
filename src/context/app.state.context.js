/* eslint-disable */
import React, { createContext, useState,useEffect } from "react";
export const AppContext = createContext();
export default function Context(props) {

    const [appState, setAppState] = useState({ screenSize: false });

    useEffect(()=>{
        handleResize()
      },[])
      
      
    const handleResize = () => {
        if (window.innerWidth < 760) {
           setAppState({
            ...appState,
            screenSize: true
        })
        } else {
            setAppState({
                ...appState,
                screenSize: false
            })
        }
    };
    // window.addEventListener('resize', handleResize)
  

    return ( < AppContext.Provider value = {
            { appState, setAppState ,handleResize}
        } > { props.children } </AppContext.Provider>)
    }
