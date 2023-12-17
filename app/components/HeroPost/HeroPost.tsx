
import Link from 'next/link'
import DateFormatter from '../DateFormatter'
import CoverImage from '../CoverImage'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
}

const HeroPost = ({
    title,
    coverImage,
    date,
    slug,
}: Props) => {
    return (
        <section>
            <div>
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div>
                <div>
                    <h3>
                        <Link
                            as={`/posts/${slug}`}
                            href="/posts/[slug]"
                            >
                            {title}
                        </Link>
                    </h3>
                    <div>
                        <DateFormatter dateString={date} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPost