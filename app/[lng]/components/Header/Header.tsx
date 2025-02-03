"use client"; // Mark this as a Client Component

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher"; // Adjust the path as needed

interface HeaderProps {
  currentLanguage: string;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage }) => {
  const [language, setLanguage] = useState(currentLanguage); // Manage language state locally

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    // If your app uses URL-based i18n, you might want to navigate to the new language page
    window.location.href = `/${newLanguage}`; // Redirect to the new language page (if applicable)
  };

  return (
    <div className="flex justify-between items-start mb-8">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="mr-4"
        />
      </div>
      {/* Language Switcher */}
      <LanguageSwitcher currentLanguage={language} onChangeLanguage={changeLanguage} />
    </div>
  );
};

export default Header;
