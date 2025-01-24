interface DocsPageProps {
  params: Promise<{
    article: string;
  }>;
}

export default async function Docs({ params }: DocsPageProps) {
  const article = await params;

  return <div>{article.article}</div>;
}
