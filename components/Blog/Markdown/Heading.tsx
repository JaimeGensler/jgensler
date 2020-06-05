import clsx from 'clsx';

type Props = { children: string };
const common = 'font-bold text-gray-800';

export function H1({ children }: Props) {
    console.log(typeof children);
    return <h1 className={clsx(common, 'text-5xl')}>{children}</h1>;
}
export function H2({ children }: Props) {
    return <h2 className={clsx(common, 'text-4xl')}>{children}</h2>;
}
export function H3({ children }: Props) {
    return <h3 className={clsx(common, 'text-3xl')}>{children}</h3>;
}
export function H4({ children }: Props) {
    return <h4 className={clsx(common, 'text-2xl')}>{children}</h4>;
}
export function H5({ children }: Props) {
    return <h5 className={clsx(common, 'text-xl')}>{children}</h5>;
}
export function H6({ children }: Props) {
    return <h6 className={clsx(common, 'text-lg')}>{children}</h6>;
}

export function HR() {
    return <hr className="border-gray-800 my-4" />;
}
