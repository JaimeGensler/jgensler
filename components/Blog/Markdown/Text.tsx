export function P({ children }: { children: string }) {
    return <p className="text-indent-8 my-2">{children}</p>;
}
export function A({ children, href }: { children: string; href: string }) {
    return (
        <a
            href={href}
            className="text-blue-800 font-bold underline transition duration-150 hover:text-green-500"
        >
            {children}
        </a>
    );
}
export function UL({ children }: { children: string[] }) {
    return <ul className="list-disc px-8 space-y-1">{children}</ul>;
}
export function OL({ children }: { children: string[] }) {
    return <ul className="list-decimal px-8 space-y-1">{children}</ul>;
}
export function LI({ children }: { children: string }) {
    return <li>{children}</li>;
}
