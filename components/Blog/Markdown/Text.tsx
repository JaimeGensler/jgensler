import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
type AProps = Props & { href: string };

export function P({ children }: Props) {
    return <p className="text-indent-8 text-justify">{children}</p>;
}

export function A({ children, href }: AProps) {
    return (
        <a
            href={href}
            className="text-blue-800 font-bold underline transition duration-150 hover:text-green-500"
        >
            {children}
        </a>
    );
}
