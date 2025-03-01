import { DocsComponents } from "@/src/global/config/app";

interface DocsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Docs({ params }: DocsPageProps) {
  const slug = (await params).slug;

  const { default: Post } = await import(
    `@/src/docs/content/components/${slug}.mdx`
  );

  return <Post />;
}

export async function generateStaticParams() {
  return Object.values(DocsComponents).map((component) => ({
    slug: component,
  }));
}

export const dynamicParams = false;
