import { Div } from "@/app/atoms";
import { Profile } from "@/app/organisms";
import { FC } from "react";

export const About: FC = () => {
  return (
    <Div>
      <Div className="flex justify-center items-center">
        <Profile name="name" desc="Description"/>
        <Profile name="name" desc="Description"/>
        <Profile name="name" desc="Description"/>
      </Div>
      <Div className="flex justify-center items-center">
        <Profile name="name" desc="Description"/>
        <Profile name="name" desc="Description"/>
        <Profile name="name" desc="Description"/>
      </Div>
    </Div>
  );
};
