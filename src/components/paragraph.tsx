type ParagraphProps = {
  children: string 
}

export default function Paragraph({children}: ParagraphProps) {
  return (
    <p>{children}</p>
  )
}