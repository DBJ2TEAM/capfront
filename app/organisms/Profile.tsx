import { FC } from "react"

import { Div } from "../atoms"
import { BIcon } from "../molecules/BIcon"
import Image from "next/image"
import deu from "@/app/assets/deu.png"

export interface ProfileProps {
    className?: string
    name: string
    desc: string
}


export const Profile:FC<ProfileProps> = ({ name, desc, className:_className}) => {
    const defaultClass = "flex flex-col justify-center items-center w-80 h-fullh"
    const className = [defaultClass, _className].join(' ')
    return (
        <Div className={className}>
            <Image src={deu} alt="DEU MAIN IMG" className=""></Image>
            <p>{name}</p>
            <p>{desc}</p>
            <Div>
                <BIcon name="Call"/>
                <BIcon name="Email"/>
            </Div>
        </Div>
    )
}