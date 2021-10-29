import * as translations from "../translations"
import { useState } from "react"

export default function useTranslation() {
  const [language, setLanguage] = useState("language", "jp")
  const [fallbackLanguage, setFallbackLanguage] = useState(
    "fallbackLanguage",
    "jp"
  )

  const translate = key => {
    const keys = key.split(".")

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    )
  }

  return {
    language,
    setLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}