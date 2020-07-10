import { ReactNode } from 'react';

type Props = { children: ReactNode };
export default function CardContainer({ children }: Props) {
    return (
        <div className="mx-2 mb-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
            {children}
        </div>
    );
}
