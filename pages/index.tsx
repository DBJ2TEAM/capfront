import React from "react";
import '../app/globals.css'
<<<<<<< HEAD
import { Navbar } from "@/app/organisms";

const Main:React.FC = () => {
    return (
      <main>
        <Navbar></Navbar>
      </main>
=======
import Home from "@/app/templates/home/Home";


const Main:React.FC = () => {
    return (
      <>
        <Home></Home>
      </>
>>>>>>> develop
    )
  }

  export default Main