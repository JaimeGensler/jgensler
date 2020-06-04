import { useState } from 'react';
import Nav from './Nav';
import Media from './Media';
import MenuButton from './MenuButton';

export default function Header() {
    const [menuExtended, setMenuExtended] = useState(false);

    return (
        <header className="h-16 shadow-md">
            <div className="flex h-12 px-8 space-x-8 bg-white text-blue-800">
                <h1 className="flex flex-grow sm:flex-grow-0 items-center font-bold text-2xl">
                    J Gensler
                </h1>
                <MenuButton
                    isOpen={menuExtended}
                    onClick={() => setMenuExtended(!menuExtended)}
                />
                <Nav />
                <Media />
            </div>

            <div className="h-4 text-blue-800 bg-green-500 bg-split" />
        </header>
    );
}
