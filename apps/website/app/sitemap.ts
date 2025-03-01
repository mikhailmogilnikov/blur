export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export default async function sitemap() {
  return [];
}

// export default async function sitemap() {
//   const blogs = O.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: post.metadata.publishedAt,
//   }))

//   const routes = ['', '/blog'].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date().toISOString().split('T')[0],
//   }))

//   return [...routes, ...blogs]
// }
