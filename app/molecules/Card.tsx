import { FC } from "react";
import { Div } from "../atoms"

interface CardProps {
    color: string;
    text: string;
    className?: string;
}

const Card:FC<CardProps> = ({color, className: _className, text}) => {
    const className = [color, _className].join(' ')

    return (
        <Div color={color} className={`${className} flex justify-center items-center`}>
            <p>
                {text}
            </p>
        </Div>
    )
}

export default Card