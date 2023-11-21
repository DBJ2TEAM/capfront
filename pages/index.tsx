import React from "react";
import '../app/globals.css'
import { Layout } from "@/app/templates/home";
import Home from "@/app/templates/home/Home";
import { Button } from "@/app/atoms";

interface LoginResponse {
    // 로그인 성공 시 반환되는 데이터 타입 정의
    // 예시로 토큰이 반환된다고 가정합니다.
    token: string;
    // 다른 반환 데이터가 있다면 여기에 추가할 수 있습니다.
  }
  
  const handleLogin = async (): Promise<LoginResponse> => {
    const username = '박준영'; // 사용자명
    const password = '1q2w3e4r'; // 비밀번호
  
    try {
      const response: Response = await fetch('http://3.37.118.103/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }
  
      const data: LoginResponse = await response.json();
      console.log('로그인 성공:', data);
      // 여기서 토큰 저장 등의 작업을 수행할 수 있습니다.
      return data; // LoginResponse 형태의 데이터 반환
    } catch (error) {
      console.log(error);
      throw new Error('로그인에 실패했습니다.');
    }
};

const Main:React.FC = () => {
    return (
      <>
        <Home></Home>
        <Button onClick={handleLogin}>로그인입니다</Button>   
      </>
    )
  }

  export default Main