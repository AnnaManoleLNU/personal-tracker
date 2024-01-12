'use client'

import { useRouter } from 'next/navigation'

type ButtonProps = {
  children: string
  href: string
  color: string
}

export default function Button({children, href, color}: ButtonProps) {
  const router = useRouter()

  const onClick = () => {
    router.push(href)
  }

  const buttonStyle = {
    backgroundColor: color,
  }

  return (
      <button 
      className="rounded-lg text-white w-24 h-8"
      type="button" 
      onClick={onClick}
      style={buttonStyle}
      >
        {children}
        </button>
  )
}
