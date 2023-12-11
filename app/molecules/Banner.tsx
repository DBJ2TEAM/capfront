import { FC } from "react"
import { ReactDivProps } from "../atoms"
import Image from "next/image"
import deu from '@/app/assets/deu.png'

export interface BannerProps extends ReactDivProps {
    src?: string
}

export const Banner:FC<BannerProps> = ({src, className:_className}) => {
    const className = ['box-sizing','w-full','h-72', src && 'bg-gray-300','border-b-8','border-accent',_className].join(' ')
    return (
         <Image src={deu} alt='banner' className={`${className}`}></Image>
    )
}