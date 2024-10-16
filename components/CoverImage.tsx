import Link from 'next/link'
import Image from 'next/image'

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            width={1300}
            height={630}
        />
    )
    return (
        <div >
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage