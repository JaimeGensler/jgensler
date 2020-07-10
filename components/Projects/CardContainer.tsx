import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
export default function CardContainer({ children }: Props) {
    return <div className="flex-1 m-4">{children}</div>;
}
