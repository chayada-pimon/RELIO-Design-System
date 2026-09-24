function saved(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; }
}

export const state = {
  lang: saved("relio-lang", "th"),
  typeLang: saved("relio-type-lang", "th"),
  typeDemo: "button",
  theme: saved("relio-theme", "light"),
  drawer: false,
  tab: "md",
  extended: false,
  demoBySpecimen: {},
  logoVariant: 0,
};

export { saved };
