import { FC, DetailedHTMLProps, HTMLAttributes } from "react";

interface DisplayProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
    fontSize? : string;
    textAlign? : string;
    text: string;
}

export const Title: FC<DisplayProps> = ({
    className: _className,
    text,
    fontSize = "text-display",
    textAlign = "text-center",
    ...props
}) => {
    const className = [textAlign, _className, fontSize].join(' ')
    
    return <h1 {...props} className={className} >{text}</h1>
}