import { DocsGuides } from "@/src/global/config/app";

interface DocsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocsGuide({ params }: DocsPageProps) {
  const slug = (await params).slug;
  const { default: Post } = await import(
    `@/src/docs/content/guides/${slug}.mdx`
  );

  return <Post />;
}

export function generateStaticParams() {
  return Object.values(DocsGuides).map((guide) => ({
    slug: guide,
  }));
}

export const dynamicParams = false;
