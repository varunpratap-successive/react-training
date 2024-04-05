//Question10
// Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import React, { useState, useEffect, useContext } from "react";
import { translations } from "./Languagedata";
import { LanguageContext } from "./LanguageContext";

function LanguageMain() {
  const [data, setData] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const newArray = translations.find(
      (element) => language === element.language
    );

    setData(newArray);
  }, [language]);

  return <>{data && <p>{data.content.para}</p>}</>;
}

export default LanguageMain;
