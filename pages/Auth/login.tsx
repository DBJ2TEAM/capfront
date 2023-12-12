import { useState } from 'react';
import axios from 'axios';
import { Button, Div } from "@/app/atoms";

import { getServerUrl } from '@/app/types/utils/getServerUrl';
import useAuthStore from '@/app/types/utils/useAuthStore';
import { useRouter } from 'next/router';

import { setCookie , deleteCookie} from 'cookies-next';

export default function Login() {
  const { setToken, login, logout } = useAuthStore();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  const handleLogin = async () => {
      try {
        const response = await axios.post(getServerUrl('/login/'), {
          username: username,
          password: password,
        });
        console.log(response)
        const receivedToken = response.data.access;
        const role = response.data.role;
        const professorId = response.data.id;
        setCookie('token', receivedToken)
        setCookie('role', role)
        setCookie('professorId', professorId)
        setToken(receivedToken);
        login();
      } catch (error) {
        console.error('로그인 에러:', error);
      }
    };
  
    if(isLoggedIn){
      router.push('/');
    }
    return (
      <Div className=''>
          <Div className='flex flex-col items-center justify-center h-fullh'>
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-96 p-3 border border-black mb-2'
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-96 p-3 border border-black'
            />
            <Button onClick={handleLogin} className='w-96 p-3 border border-black bg-primary text-white mt-9'>로그인</Button>

          </Div>
      </Div>
  )
}