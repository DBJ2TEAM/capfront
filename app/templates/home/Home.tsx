
import { Button, Div, Title } from "@/app/atoms"
import Card from "@/app/molecules/Card"
import Image from 'next/image'
import main from '@/app/assets/main.svg'
import { LinkBtn } from "@/app/atoms/Link"
import useAuthStore from '@/app/types/utils/useAuthStore';
import { useRouter } from "next/router"

const Home = () => {
    const { isLoggedIn, logout } = useAuthStore();
    const router = useRouter()
    const handleLogin = () => router.push('/Auth/login')
    const handleAbout = () => router.push('/About')
    const handleReserve = () => router.push('/Reservation')

    
    
    if(isLoggedIn){
        return (
            <Div>
                <Div className="flex justify-around h-fullh items-center">
                    <Div className="flex items-center flex-col">
                        <Title text="Dongeui University reservation service" className="w-96 font-normal text-primary"></Title>
                        <Button className="w-44 h-11 mt-5 bg-accent text-primary rounded-xl" onClick={logout}>Logout</Button>
                    </Div>
                    <Image src={main} alt="DEU MAIN IMG" className="h-fullh w-96"></Image>
                </Div>
                <Div className="flex justify-around items-center">
                    <Card color="bg-primary text-white" className="w-80 h-24 rounded-xl text-bd2" text="About"></Card>
                    <Card color="bg-accent text-black" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
                    <Card color="bg-secondary text-white" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
                </Div>
            </Div>
        )
    } else {
        return (
            <Div>
                <Div className="flex justify-around h-fullh items-center">
                    <Div className="flex items-center flex-col">
                        <Title text="Dongeui University reservation service" className="w-96 font-normal text-primary"></Title>
                        <Button onClick={handleLogin} className="w-44 h-11 mt-5 bg-accent text-primary rounded-xl">Login</Button>
                    </Div>
                    <Image src={main} alt="DEU MAIN IMG" className="h-fullh w-96"></Image>
                </Div>
                <Div className="flex justify-around items-center">
                    <Card onClick={handleAbout} color="bg-primary text-white" className="w-80 h-24 rounded-xl text-bd2" text="About"></Card>
                    <Card onClick={handleReserve} color="bg-accent text-black" className="w-80 h-24 rounded-xl text-bd2" text="Reservation"></Card>
                    <Card color="bg-secondary text-white" className="w-80 h-24 rounded-xl text-bd2" text="Book assignment"></Card>
                </Div>
            </Div>
        )
    }
}

export default Home