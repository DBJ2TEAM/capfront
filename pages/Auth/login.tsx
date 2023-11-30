import { useState } from 'react';
import axios from 'axios';
import { Button, Div } from "@/app/atoms";

export default function Login() {
  const [token, setToken] = useState<string>(''); 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('로그인_요청_URL', {
        username: username,
        password: password,
      });

      const receivedToken = response.data.token;
      localStorage.setItem('token', receivedToken);
      setToken(receivedToken);
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Div className=''>
      {!token ? (
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
      ) : (
        <div>
          <Button onClick={handleLogout}>로그아웃</Button>
        </div>
      )}
    </Div>
  )
}