export const APP_CONFIG = {
  name: "Blur UI",
  description: "The modern and flexible design system for your next project.",
} as const;

enum DocsArticles {
  GETTING_STARTED = "getting-started",
  
}

export const APP_ROUTES = {
  HOME: "/",
  DOCS_ARTICLE: (article: `${DocsArticles}`) => `/docs/${article}`,
} as const;
