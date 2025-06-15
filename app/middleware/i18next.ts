import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";
import { createCookie } from "react-router";
import en from "~/locales/en";
import id from "~/locales/id";
import { initReactI18next } from "react-i18next";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  // secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ["en", "id"],
      fallbackLanguage: "en",
      cookie : localeCookie
    },
    i18next: {
      resources: { en: { translation: en }, id: { translation: id } },
      // Other i18next options are available here
    },
    plugins: [initReactI18next]
  });

  declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en;
    };
  }
}