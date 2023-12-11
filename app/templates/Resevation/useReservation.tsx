import { useRouter } from 'next/router';

interface PropsType{
  title: string,
  user: string
}

export default function useReservation({title, user}: PropsType){

  const router = useRouter();


  const handleClick = () => {
    switch(title+user){
      case "상담학생":
        router.push("Reservation/Consulting")
        break
      case "상담조교":
        router.push("Reservation/Consulting")
        break
      case "상담교수":
          router.push("Reservation/Consulting")
          break

      case "학과 기물학생":
        router.push("Reservation/Equipment")
        break
      case "학과 기물조교":
        router.push("Reservation/Equipment")
        break
      case "학과 기물교수":
        router.push("Reservation/Equipment")
        break

      case "강의실학생":
        router.push("Reservation/LectureRoom")
        break
      case "강의실조교":
        router.push("Reservation/LectureRoom")
        break
      case "강의실교수":
        router.push("Reservation/LectureRoom")
        break
    }
  };

  return{
    handleClick,
  }
}