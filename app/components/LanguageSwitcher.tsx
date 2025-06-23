import { useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    console.log("clicked");
    const nextLang = i18n.language === "en" ? "id" : "en";
    const url = new URLSearchParams(location.search);
    url.set("lng", nextLang);
    navigate(`${location.pathname}?${url.toString()}`, { replace: true });
    i18n.changeLanguage(nextLang);
  };

  const flag = i18n.language === "en"
  ? "https://flagcdn.com/us.svg"
  : "https://flagcdn.com/id.svg";

  return (
    <button
      onClick={toggleLanguage}
      className="block text-2xl p-1 rounded-full border hover:scale-105 transition cursor-pointer"
      title="Change language"
    >
       <img src={flag} alt="Language" className="w-6 h-6 rounded-full" />
    </button>
  );
}
