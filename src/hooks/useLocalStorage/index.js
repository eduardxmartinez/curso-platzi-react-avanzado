import React,{ useState } from "react"


export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=> {
      try{
        const item = localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
      } catch(e){
        return initialValue
      }
    })
  
    const setLocalStorage = (value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
      } catch (e) {
        console.error(e);
      }
    };
  
    return [value, setLocalStorage]
  }