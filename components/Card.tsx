import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
    children?: ReactNode;
    className?: string;
};
export default function Card({ children, className }: Props) {
    return (
        <div className={clsx('p-4 shadow-md rounded-md bg-white', className)}>
            {children}
        </div>
    );
}
