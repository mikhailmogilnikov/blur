import type { MDXComponents } from "mdx/types";

import { Typo } from "./src/global/ui/typo";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <Typo as="h1" className="text-4xl" {...props} />,
    h2: (props) => <Typo as="h2" className="text-3xl" {...props} />,
    h3: (props) => <Typo as="h3" className="text-2xl" {...props} />,
    h4: (props) => <Typo as="h4" className="text-xl" {...props} />,
    h5: (props) => <Typo as="h5" className="text-lg" {...props} />,
    h6: (props) => <Typo as="h6" className="text-base" {...props} />,
    p: (props) => <Typo as="p" className="text-base" {...props} />,
    ...components,
  };
}
