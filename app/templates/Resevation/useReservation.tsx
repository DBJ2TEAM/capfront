import { useRouter } from 'next/router';

export default function useReservation(title: string){

  const router = useRouter();


  const handleClick = () => {
    switch(title){
      case "상담":
        router.push("Reservation/Consulting")

        break
      case "학과 기물":
        router.push("Reservation/Equipment")
        break
      case "강의실":
        router.push("Reservation/LectureRoom")
        break
    }
  };

  return{
    handleClick,
  }
}