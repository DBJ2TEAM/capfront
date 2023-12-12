import { FC } from "react"

import { Div } from "../atoms"
import { BIcon } from "../molecules/BIcon"
import Image from "next/image"
import deu from "@/app/assets/deu.png"

export interface ProfileProps {
    className?: string
    name: string
    department: string
    phone: string
    lab: string
    email: string
}


export const Profile:FC<ProfileProps> = ({ name, department, phone, lab, email ,className:_className}) => {
    const defaultClass = "flex flex-col justify-center items-center p-10 h-fullh"
    const className = [defaultClass, _className].join(' ')
    return (
        <Div className={className}>
            <Image src={deu} alt="DEU MAIN IMG" className=""></Image>
            <p>{name}</p>
            <p>{department}</p>
            <p>{phone}</p>
            <p>{lab}</p>
            <p>{email}</p>
            <Div>
                <BIcon name="Call"/>
                <BIcon name="Email"/>
            </Div>
        </Div>
    )
}