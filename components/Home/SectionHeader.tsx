import { ReactNode } from 'react';
import clsx from 'clsx';

const headerLineCommon = 'header-line text-gray-600';
type Props = {
    children?: ReactNode;
    side?: 'left' | 'right';
};
export default function SectionHeader({ children, side }: Props) {
    const [w1, w2] =
        side === undefined || side === 'left'
            ? ['w-8', 'flex-1']
            : ['flex-1', 'w-8'];
    return (
        <div className="flex items-center">
            <div className={clsx(headerLineCommon, w1)} />
            <h1 className="font-bold text-3xl mx-2">{children}</h1>
            <div className={clsx(headerLineCommon, w2)} />
        </div>
    );
}
