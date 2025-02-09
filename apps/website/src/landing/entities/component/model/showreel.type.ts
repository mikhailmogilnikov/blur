export type ShowreelComponent = {
  id: number;
  name: string;
  slug: string;
  content: <T>(props: T) => React.ReactNode;
};
