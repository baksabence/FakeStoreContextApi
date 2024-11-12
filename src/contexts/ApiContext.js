import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";


export const ApiContext = createContext("")
export const ApiProvider = ({children})=> {
    const [termekLista, setTermekLista] = useState([])
    const [kategoriak, setKategoriak] = useState([])
    
    
    const getAdat = async (vegpont, callbackFv ) => {
        try {
            const response = await myAxios.get(vegpont, callbackFv);
            callbackFv( response.data);
          } catch (err) {
            console.log("Hiba történt az adat elküldésekor.", err)
    }finally{
        
    }
    }
// OTTHONI ---
 /*   const kategoriakLekerdezese = async (vegpont) => {
        try {
          const response = await myAxios.get(vegpont)
          setKategoriak(response.data)
        } catch (err) {
          console.log("Hiba történt a kategóriák lekérésekor.", err)
        }
      };*/
// --- 

    /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket 
    - aszonkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőség listában változás történik
    */

    const postAdat = async (vegpont, adat ) => {
      try {
          const response = await myAxios.get(vegpont, adat);
          console.log("adat: ", response.data);
        } catch (err) {
          console.log("Hiba történt az adat elküldésekor.", err)
  }finally{
      
  }
  }


  const deleteAdat = async (vegpont, id) => {
    try {
        const response = await myAxios.delete(vegpont + "/" + id);
        console.log("törölve: ", response.data);
      } catch (err) {
        console.log("Hiba történt a termék törlésekor.", err)
}finally{
    
}
}

/*const patchAdat = async (vegpont, id) => {
  try {
      const response = await myAxios.patch(vegpont + "/" + id);
      console.log("Módosítva: ", response.data);
    } catch (err) {
      console.log("Hiba történt a termék módosításakor.", err)
}finally{
  
}
}
  */  
    useEffect(()=>{
        getAdat("/products", setTermekLista)
        getAdat("/products/categories", setKategoriak,)
        
      //  kategoriakLekerdezese("/products/categories")
    },
    [])

    return (
        <ApiContext.Provider value = {{termekLista, kategoriak, postAdat, deleteAdat}}>{children}

        </ApiContext.Provider>
    );
    

}