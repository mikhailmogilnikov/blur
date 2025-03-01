export const APP_CONFIG = {
  name: "Blur",
  description: "The modern and flexible design system for your React project.",
} as const;

export enum DocsGuides {
  GETTING_STARTED = "getting-started",
}

export enum DocsComponents {
  MESH_GRADIENT = "mesh-gradient",
}

export const APP_ROUTES = {
  HOME: "/",
  DOCS: {
    GUIDE: (guide: `${DocsGuides}`) => `/docs/guides/${guide}`,
    COMPONENT: (component: `${DocsComponents}`) =>
      `/docs/components/${component}`,
  },
} as const;
