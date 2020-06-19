import { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
    level: number;
};
const headings = [
    (props: any) => <h2 {...props} />,
    (props: any) => <h3 {...props} />,
];
export default function CollapsableList({ title, children, level }: Props) {
    const Heading = headings[level];
    return (
        <li>
            <Heading className="font-bold">{title}</Heading>
            <ul className="pl-2">{children}</ul>
        </li>
    );
}
