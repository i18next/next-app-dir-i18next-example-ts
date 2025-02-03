"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

interface LanguageSwitcherProps {
  currentLanguage: string
  onChangeLanguage: (lang: string) => void
}

export default function LanguageSwitcher({ currentLanguage, onChangeLanguage }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (langCode: string) => {
    onChangeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            style={{
              position: "fixed",
              left: buttonRef.current?.getBoundingClientRect().left,
              top: buttonRef.current?.getBoundingClientRect().bottom,
            }}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
