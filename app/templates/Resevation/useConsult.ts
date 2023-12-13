import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getServerUrl } from "@/app/types/utils/getServerUrl"

interface PropsType{
  path: string
}

export default function useConsult({ path }: PropsType){
  const [list, setList]= useState<Array<{
    id: number,
    name: string,
    department: string,
    email: string,
    photo: string,
    phone_number: string,
    lab_number: string,
    user: number
  }>>()  

  const listData = async () => {
    try {
      const response = await axios.get(getServerUrl(`/${path}/`));
      const data = response.data
      setList(data)
      return data
    } catch (error) {
      console.error('로그인 에러:', error);
      throw error;
    }
  };
  useEffect(() => {
    listData();
  }, [])

  
  return{
    list,
  }
}