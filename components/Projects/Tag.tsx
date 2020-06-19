import clsx from 'clsx';

const colors: { [tag: string]: string } = {
    TypeScript: 'bg-blue-700',
    React: 'bg-blue-400',
};
type Props = {
    text: string;
};
export default function Tag({ text }: Props) {
    return (
        <span
            className={clsx(
                'm-1 p-1 font-medium text-white rounded text-xs',
                colors[text] || 'bg-gray-800',
            )}
        >
            {text}
        </span>
    );
}
