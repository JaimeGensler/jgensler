import { ReactNode } from 'react';

type Props = { children: ReactNode };
export default function Main({ children }: Props) {
    return (
        <div className="flex-grow p-2px text-blue-800 bg-green-500 rounded-md bg-split">
            <main className="p-12 rounded bg-white text-gray-700">
                {children}
            </main>
        </div>
    );
}
