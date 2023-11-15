import { FC } from "react";
import { Button, ButtonProps, Div, Title } from "../atoms";

export interface NavigationItemProps extends ButtonProps {
    path: string;
    text: string;
}

const NavigationItem:FC<NavigationItemProps> = ({
    text,
    path,
    onClick,
    className: _className
}) => {
    const className = [_className].join(' ')
    return <Button className={className} onClick={onClick}>{text}</Button>
}

export interface NavigationProps {
    title: string;
    items: NavigationItemProps[];
    className?: string;
}

export const Navigation: FC<NavigationProps> = ({
    title,
    items,
    className,
}) => {
    return (
        <nav className="bg-primary text-white">
            <Div className={className}>
                <Title className="font-medium p-4" text={title} fontSize="text-display2"></Title>
                <Div>
                    {items.map((item)=> (
                        <NavigationItem key={item.path} {...item} className="p-4"/>
                    ))}
                </Div>
            </Div>
        </nav>
    )
}