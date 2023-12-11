import React from "react";
import '../app/globals.css'
import Home from "@/app/templates/home/Home";
import { About } from "@/app/templates";
import Select from "./Reservation";


const Main:React.FC = () => {
    return (
      <>
        <Home></Home>
        <About></About>
        <Select></Select>
      </>
    )
  }

  export default Main