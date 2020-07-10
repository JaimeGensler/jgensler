import clsx from 'clsx';

interface Colors {
    [tag: string]: string;
}
const colors: Colors = {
    TypeScript: 'bg-blue-700',
    React: 'bg-blue-500',
};

type Props = { text: string };
export default function Tag({ text }: Props) {
    return (
        <span
            className={clsx(
                'm-1 p-1 font-semibold text-white rounded text-xs',
                colors[text] || 'bg-gray-800',
            )}
        >
            {text}
        </span>
    );
}
