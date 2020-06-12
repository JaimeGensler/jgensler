import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
    children: ReactNode;
    href: string;
    title?: string;
};

const shared = 'duration-150 font-bold mx-4 hover:text-green-500';

export function InternalLink({ children, href, title }: Props) {
    return (
        <li className="h-full flex items-center">
            <Link href={href} passHref>
                <a
                    title={title}
                    className={clsx(
                        shared,
                        'border-l-2 border-r-2 border-solid border-transparent px-0 transition-navlink',
                        'hover:border-green-500 hover:mx-0 hover:px-4',
                    )}
                >
                    {children}
                </a>
            </Link>
        </li>
    );
}
export function ExternalLink({ children, href, title }: Props) {
    return (
        <li className="h-full flex items-center">
            <a
                href={href}
                title={title}
                className={clsx(shared, 'transition transform hover:scale-150')}
            >
                {children}
            </a>
        </li>
    );
}
