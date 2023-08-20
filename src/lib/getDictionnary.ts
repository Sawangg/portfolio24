import "server-only";

const dictionnaries = {
  en: () => import("../../public/locales/en.json").then((module) => module.default),
  fr: () => import("../../public/locales/fr.json").then((module) => module.default),
};

export type Locales = keyof typeof dictionnaries;
export type Dictionnary = Awaited<ReturnType<typeof getDictionnary>>;

export const getDictionnary = async <T extends Locales>(locale: T) => dictionnaries[locale as T]();
