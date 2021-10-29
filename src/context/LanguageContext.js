import React,{createContext, useState, useEffect} from 'react'
import useTranslation from '../hooks/useTranslation';

export const LanguageContext = createContext();

export function LanguageProvider(props) {

    const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

    return (
        <LanguageContext.Provider value={{language, setLanguage, setFallbackLanguage, t }}>
            {props.children}
        </LanguageContext.Provider>
    )
}


