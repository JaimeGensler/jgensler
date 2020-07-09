import { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import MenuButton from './MenuButton';

export default function Header() {
    const [menuExtended, setMenuExtended] = useState(false);
    return (
        <header className="h-16 shadow-md text-blue-800">
            <div className="flex flex-wrap h-12 px-8 space-x-8 bg-white">
                <div className="flex flex-grow sm:flex-grow-0 items-center ">
                    <Link href="/" passHref>
                        <a
                            title="Home Page"
                            className="font-bold text-2xl transition-color duration-150 hover:text-green-500"
                        >
                            J Gensler
                        </a>
                    </Link>
                </div>
                <MenuButton
                    isOpen={menuExtended}
                    toggle={() => setMenuExtended(!menuExtended)}
                />
                <Nav isOpen={menuExtended} />
            </div>

            <div className="h-4 bg-green-500 bg-split" />
        </header>
    );
}
