/// <reference types="mdx" />
declare module 'github-markdown-css';

declare module '*.md' {
  import type { MDXProps } from 'mdx/types';
  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
