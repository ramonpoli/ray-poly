'use client'
import Hero from "@/components/Hero/Hero"
import NetlifyForm from "@/components/NetlifyForm"
import { useSearchParams } from "next/navigation"
import { FC } from "react"

type Props = {
  title: string
  description: string
}

const ECommerceWebsitePage: FC<Props> = ({ title, description }) => {
  const searchParams = useSearchParams()
  const hasSubmitted = searchParams.get('name')
  return (
    <div>
      <Hero title={title}
        subtitle={description}
        image={{
          src: '/boilerplate.png',
          alt: 'boilerplate e-commerce website image'
        }}
      />
      <NetlifyForm hasSubmitted={!!hasSubmitted} />
    </div>
  )
}
export default ECommerceWebsitePage