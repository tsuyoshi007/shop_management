import React from "react";
import { IntlProvider } from "react-intl";
import useLocalStorage from "../../hooks/useLocalStorage";

import locale_en from "../../LocaleData/en.json";
import locale_kh from "../../LocaleData/kh.json";

type LocaleMessages = Record<string,string>

const LocaleData:Record<string, LocaleMessages> = {
  en: {
    greeting: "Hello {name}! How are you?",
    time: "The time is {t, time, short}.",
    date: "The date is {d, date}."
  }
};

export const getMatchingLocale= (languages: readonly string[]) => {
  const localeEntries = Object.keys(LocaleData)

  for (const preferredLocale of languages) {
    for (const localeEntry of localeEntries) {
      if (localeEntry[1].toLowerCase() === preferredLocale.toLowerCase()) {
        return localeEntry;
      }
    }
  }
  return undefined;
};

const LocalProvider: React.FC = props => {
  const { children } = props;
  const [locale, setLocale] = useLocalStorage(
    "locale",
    getMatchingLocale(navigator.languages)
  );
  return (
    <IntlProvider locale={locale} messages={LocaleData[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LocalProvider;
