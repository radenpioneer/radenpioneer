import type { FC } from 'react'

const Picture: FC<{ imgSrc: any; alt?: string }> = ({ imgSrc, alt }) => (
  <picture>
    {imgSrc.sources.map((img) => (
      <source {...img} key={img.type} />
    ))}
    <img {...imgSrc.image} alt={alt} />
  </picture>
)

export default Picture
