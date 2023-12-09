
import { Div, Title } from "@/app/atoms"
import Card from "@/app/molecules/Card"
import Image from 'next/image'
import ButtonColor from "@/app/molecules/ButtonColor"

import deu from '@/app/assets/deu.png'

const Home = () => {
    return (
        <Div>
            <Div className="flex justify-center h-fullh items-center">
                <Div className="flex items-center flex-col">
                    <Title text="Dongeui University reservation service" className="w-96 font-normal text-primary"></Title>
                    <ButtonColor text="Login Let's go" className="w-44 h-11 mt-5"></ButtonColor>
                </Div>
                <Image src={deu} alt="DEU MAIN IMG" className=""></Image>
            </Div>
            <Div className="flex justify-around items-center">
                <Card color="bg-primary text-white" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
                <Card color="bg-accent text-black" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
                <Card color="bg-secondary text-white" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
            </Div>
        </Div>
    )
}

export default Home