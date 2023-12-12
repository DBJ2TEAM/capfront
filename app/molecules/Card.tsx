import { FC } from "react";
import { Div } from "../atoms"

interface CardProps {
    color: string;
    text: string;
    className?: string;
    onClick?:() => void;
}

const Card:FC<CardProps> = ({color, className: _className, text, onClick}) => {
    const className = [color, _className].join(' ')

    return (
        <Div onClick={onClick} color={color} className={`${className} flex justify-center items-center`}>
            <p>
                {text}
            </p>
        </Div>
    )
}

export default Card