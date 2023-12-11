import { FC } from "react";
import { useState, useEffect } from "react";

import { Div, Button } from "@/app/atoms";
import { Profile,ProfileProps } from "@/app/organisms";
import { getServerUrl } from "@/app/types/utils/getServerUrl";
import axios from "axios";

export const About: FC = () => {
  const [professors, setProfessors] = useState<ProfileProps[]>([])
  const handleProfile = async () => {
    try {
      const response = await axios.get(getServerUrl('/professors_list/'))
      console.log(response.data)
      setProfessors(response.data)
    }
    catch (error){
      console.log(error)
    }
  }
  useEffect(() => {
    handleProfile();
  }, []);
  return (
    <Div>
      <Div className="flex justify-center items-center">
        {professors.map((professor, index) => (
          <Profile
            key={index}
            name={professor.name}
            department={professor.department}
            phone={professor.phone}
            email={professor.email}
            lab={professor.lab}
          />
        ))}
      </Div>
    </Div>
  );
};
