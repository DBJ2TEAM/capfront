import { useRouter } from 'next/router';

interface PropsType{
  title: string,
  user: string,
  token: string,
}

export default function useReservation({title, user, token}: PropsType){

  const router = useRouter();


  const handleClick = () => {
    if(token) {
      switch(title+user){
        case "상담학생":
          router.push("Reservation/Consulting/student")
          break
        case "상담professor":
          router.push("Reservation/Consulting/professor")
          break
        case "상담assistant":
            router.push("Reservation/Consulting/professor")
            break
  
        case "학과 기물학생":
          router.push("Reservation/Equipment/student")
          break
        case "학과 기물professor":
          router.push("Reservation/Equipment/professor")
          break
        case "학과 기물assistant":
          router.push("Reservation/Equipment/professor")
          break
  
        case "강의실학생":
          router.push("Reservation/LectureRoom/student")
          break
        case "강의실professor":
          router.push("Reservation/LectureRoom/professor")
          break
        case "강의실assistant":
          router.push("Reservation/LectureRoom/professor")
          break
      }
    }
    else {
      router.push("Auth/login")
    }

  };

  return{
    handleClick,
  }
}