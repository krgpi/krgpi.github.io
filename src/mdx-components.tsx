import type { MDXComponents } from 'mdx/types';

export const useMDXComponents =(components: MDXComponents): MDXComponents => {
  return {
    ...components,
    h1: (props) => {
      return <h1 className="text-white py-2 text-3xl font-light text-primary">{props.children}</h1>;
    },
    h2: (props) => {
      return (
        <h2 className="text-white mb-4 border-b border-b-gray-200 pb-1 pt-2 text-2xl font-medium text-primary">
          {props.children}
        </h2>
      );
    },
    h3: (props) => {
      return <h3 className="text-white mb-2 py-1 text-xl font-bold">{props.children}</h3>;
    },
    h4: (props) => {
      return <h4 className="text-white py-1 text-primary">{props.children}</h4>;
    },
    table: (props) => {
      return <table className="w-full border-collapse">{props.children}</table>;
    },
    th: (props) => {
      return <th className="whitespace-nowrap border border-gray-200 bg-gray-100 px-4 py-2">{props.children}</th>;
    },
    td: (props) => {
      return <td className="border border-gray-200 px-4 py-2">{props.children}</td>;
    },
    ol: (props) => {
      return <ol className="mb-4 list-inside list-decimal text-sm text-white">{props.children}</ol>;
    },
    ul: (props) => {
      return <ul className="mb-4 list-inside list-disc text-sm text-white">{props.children}</ul>;
    },
    li: (props) => {
      return <li className="pl-2 text-white">{props.children}</li>;
    },
    a: (props) => {
      return (
        <a className="text-primary underline text-krg-link-orange" rel="noopener noreferrer" target="_blank" {...props}>
          {props.children}
        </a>
      );
    },
    strong: (props) => {
      return <span className='font-bold text-white'>{props.children}</span>;
    },
    p: (props) => {
      return <p className="mb-4 text-sm text-white">{props.children}</p>;
    },
    img: ({ src, alt }) => <img className='' src={src ?? ""} alt={alt ?? ""} />
  };
};
