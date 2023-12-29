import React from 'react'
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export function Links({ children, ...props }: Props) {
  return (
    <a
      href="#"
      className="font-semibold text-indigo-600 hover:text-indigo-500"
      {...props}
    >
      {children}
    </a>
  )
}

export default Links
