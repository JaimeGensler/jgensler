import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
    children: ReactNode;
    href: string;
    title?: string;
};

const shared = 'text-blue-800 duration-150 font-bold hover:text-green-500 mx-4';
export function InternalNav({ children, href, title }: Props) {
    return (
        <li className="h-full flex items-center">
            <Link href={href} passHref>
                <a
                    title={title}
                    className={`${shared} border-l-2 border-r-2 border-solid border-transparent transition-navlink px-0 hover:border-green-500 hover:mx-0 hover:px-4`}
                >
                    {children}
                </a>
            </Link>
        </li>
    );
}
export function ExternalNav({ children, href, title }: Props) {
    return (
        <li className="h-full flex items-center">
            <a
                href={href}
                title={title}
                className={`${shared} transition transform hover:scale-150`}
            >
                {children}
            </a>
        </li>
    );
}
