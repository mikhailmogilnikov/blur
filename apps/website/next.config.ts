import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    reactCompiler: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    jsx: true,
    remarkPlugins: [
      // @ts-expect-error - remark-frontmatter types aren't properly recognized
      ["remark-frontmatter"],
      // @ts-expect-error - remark-mdx-frontmatter types aren't properly recognized
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

export default withMDX(nextConfig);
