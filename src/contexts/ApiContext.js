import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";


export const ApiContext = createContext("")
export const ApiProvider = ({children})=> {
    const [termekLista, setTermekLista] = useState([])
    const [kategoriak, setKategoriak] = useState([])
    
    
    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont);
            setTermekLista( response.data);
          } catch (err) {
            console.log("Hiba történt az adat elküldésekor.", err)
    }finally{
        
    }
    }

    const kategoriakLekerdezese = async (vegpont) => {
        try {
          const response = await myAxios.get(vegpont)
          setKategoriak(response.data)
        } catch (err) {
          console.log("Hiba történt a kategóriák lekérésekor.", err)
        }
      };


    /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket 
    - aszonkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőség listában változás történik
    */
    
    useEffect(()=>{
        getAdat("/products")
        kategoriakLekerdezese("/products/categories")
    },
    [])

    return (
        <ApiContext.Provider value = {{termekLista, kategoriak}}>{children}

        </ApiContext.Provider>
    );
    

}