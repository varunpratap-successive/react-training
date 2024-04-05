import LanguageMain from "./LanguageMain";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

const languages=["english","hindi","spanish","japanese"]

function LanguageApp()
{  
    const [language,setLanguage]=useState("english");
   
    return(
        <>
         <select onClick={(e)=>setLanguage(e.target.value)}>
           { languages.map((element)=>
            <option key={element} value={element}>{element}</option>
            )
           }
        </select>
    
       <LanguageContext.Provider value={{language}}>
        <LanguageMain/>
       </LanguageContext.Provider>
       </>
    )
}
export default LanguageApp;
