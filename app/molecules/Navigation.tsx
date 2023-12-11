import { FC } from "react";
import { Button, ButtonProps, Div, Title } from "../atoms";
import Link from "next/link";
import { LinkBtn } from "../atoms/Link";

export interface NavigationItemProps extends ButtonProps {
    path: string;
    text: string;
}

const NavigationItem: FC<NavigationItemProps> = ({
    text,
    path,
    className: _className
}) => {
    const className = [_className].join(' ')
    return (
        <Link href={path} className={className}>
            {text}
        </Link>
    );
};

export interface NavigationProps {
    title: string;
    items: NavigationItemProps[];
    className?: string;
    onClick?: (path: string) => void;
}

export const Navigation: FC<NavigationProps> = ({
    title,
    items,
    className,
}) => {
    return (
        <nav className="bg-primary text-white">
            <Div className={className}>
                <h1 className="text-display2 font-medium p-4">{title}</h1>
                <Div>
                    {items.map((item) => (
                        <NavigationItem key={item.path} {...item} className="p-4" />
                    ))}
                </Div>
            </Div>
        </nav>
    );
};
