import i18n from '@/i18n';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';


const LanguageMenu = () => {
 const { t, i18n } = useTranslation("navbar");
  const [langState, setLangState] = useState("EN")
  console.log(langState);
  

 

  return (
    <select
    value={langState}
    onChange={ (e) => {
      const selectedLange = e.target.value;
      setLangState(selectedLange)
       if(langState === "EN") {
    i18n.changeLanguage("en")
  }else if (langState === "FR") {
    i18n.changeLanguage("fr")
  }
    } }
    >  
  <option value="EN">EN</option>
  <option value="FR">FR</option>
  <option value="ES">ES</option>
    </select>
  )
}

export default LanguageMenu