import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-4xl" {...props}>{children}</h1>
    ),
    p: ({ children, ...props }) => (
      <p className="text-base text-gray-800 leading-relaxed my-4" {...props}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-blue-500 underline hover:text-blue-700 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    li: ({ children, ...props }) => (
      <li className="mb-1" {...props}>
        {children}
      </li>
    ),
    code: ({ children, ...props }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    ),
    img: ({ src, alt, ...props }) => (
      <img src={src} alt={alt} className="my-6 rounded-md shadow max-w-full" {...props} />
    ),
    ...components,
  }
}
