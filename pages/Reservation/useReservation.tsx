import { useRouter } from 'next/router';

export default function useReservation(title: string){

  const router = useRouter();

  const handleClick = () => {
    console.log(title)
    switch(title){
      case "상담":
        router.push('/another-page');

      case "학과 기물":
        router.push('/another-page');
      
      case "강의실":
        router.push('/another-page');
    }
    
  };

  return{
    handleClick
  }
}