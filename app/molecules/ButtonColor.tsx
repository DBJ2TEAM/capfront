import { Button, ButtonProps } from "../atoms"
import { FC } from "react";

interface ButtonColorProps extends ButtonProps {
    text: string;
    className?: string;
}


const ButtonColor:FC<ButtonColorProps> = ({text, className:_className}) => {
    return (
        <Button className={`bg-accent text-primary rounded-xl ${_className}`}>{text}</Button>
    )
}

export default ButtonColor