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
        router.push("Reservation/Consulting/student")
        break
      case "상담조교":
        router.push("Reservation/Consulting/professor")
        break
      case "상담교수":
          router.push("Reservation/Consulting/professor")
          break

      case "학과 기물학생":
        router.push("Reservation/Equipment/student")
        break
      case "학과 기물조교":
        router.push("Reservation/Equipment/professor")
        break
      case "학과 기물교수":
        router.push("Reservation/Equipment/professor")
        break

      case "강의실학생":
        router.push("Reservation/LectureRoom/student")
        break
      case "강의실조교":
        router.push("Reservation/LectureRoom/professor")
        break
      case "강의실교수":
        router.push("Reservation/LectureRoom/professor")
        break
    }
  };

  return{
    handleClick,
  }
}