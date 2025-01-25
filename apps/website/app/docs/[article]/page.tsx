interface DocsPageProps {
  params: Promise<{
    article: string;
  }>;
}

export default async function Docs({ params }: DocsPageProps) {
  const article = await params;

  return <div className="">{article.article}</div>;
}
