import { ReactNode, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import clsx from 'clsx';

const headings = [
    (props: any) => <h2 {...props} />,
    (props: any) => <h3 {...props} />,
];
type Props = {
    title: string;
    children: ReactNode;
    level: number;
};
export default function CollapsableList({ title, children, level }: Props) {
    const [isOpen, setIsOpen] = useState(level === 0);
    const toggleOpen = () => setIsOpen(!isOpen);
    const Heading = headings[level];
    const sublist = (
        <ul className={clsx('pl-4 space-y-2', isOpen ? 'block' : 'hidden')}>
            {children}
        </ul>
    );

    return (
        <li>
            <button
                type="button"
                className="flex items-center mb-2"
                onClick={toggleOpen}
            >
                <IoMdArrowDropright
                    className={clsx(
                        'transform transition-transform duration-150',
                        isOpen ? 'rotate-90' : 'rotate-0',
                    )}
                />
                <Heading className="font-bold">{title}</Heading>
            </button>
            {sublist}
        </li>
    );
}
