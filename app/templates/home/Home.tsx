
import { Button, Div, Title } from "@/app/atoms"
import Card from "@/app/molecules/Card"
import Image from 'next/image'
import main from '@/app/assets/main.svg'
import { LinkBtn } from "@/app/atoms/Link"
import useAuthStore from '@/app/types/utils/useAuthStore';

const Home = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const { logout } = useAuthStore();
  
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
    }
    else {
        return (
            <Div>
                <Div className="flex justify-around h-fullh items-center">
                    <Div className="flex items-center flex-col">
                        <Title text="Dongeui University reservation service" className="w-96 font-normal text-primary"></Title>
                        <LinkBtn href="/Auth/login" className="w-44 h-11 mt-5 bg-accent text-primary rounded-xl" text="Login"></LinkBtn>
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
    }
}

export default Home