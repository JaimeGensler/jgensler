import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
export function H1({ children }: Props) {
    return <h1 className="text-5xl font-bold text-gray-800">{children}</h1>;
}
export function H2({ children }: Props) {
    return <h2>{children}</h2>;
}
export function H3({ children }: Props) {
    return <h3>{children}</h3>;
}
export function H4({ children }: Props) {
    return <h4>{children}</h4>;
}
export function H5({ children }: Props) {
    return <h5>{children}</h5>;
}
export function H6({ children }: Props) {
    return <h6>{children}</h6>;
}
