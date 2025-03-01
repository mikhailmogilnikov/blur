import { DocsComponents } from "@/src/global/config/app";

export type ShowreelComponent = {
  id: number;
  name: string;
  slug: `${DocsComponents}`;
  content: <T>(props: T) => React.ReactNode;
};
