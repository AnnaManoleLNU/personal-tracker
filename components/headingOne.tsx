type HeadingOneProps = {
  children: string
}

export default function HeadingOne({children}: HeadingOneProps) {
  return (
    <h1 className="text-2xl">{children}</h1>
  )
}