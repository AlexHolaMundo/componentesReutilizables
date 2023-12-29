import React from 'react'
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}
export function Images({ ...props }: Props) {
  return <img className="mx-auto h-10 w-auto" {...props} />
}

export default Images
