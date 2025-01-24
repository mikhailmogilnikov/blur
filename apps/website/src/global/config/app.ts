export const APP_CONFIG = {
  name: "Blur UI",
  description: "The modern and flexible design system for your next project.",
} as const;

export const APP_ROUTES = {
  HOME: "/",
  DOCS_ARTICLE: (article: string = "") => `/docs/${article}`,
} as const;
