import React from 'react'
interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}
export function Paragraphs({ children, ...props }: Props) {
  return (
    <p className="mt-10 text-center text-sm text-gray-500" {...props}>
      {children}
    </p>
  )
}

export default Paragraphs
