import { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import MenuButton from './MenuButton';
import clsx from 'clsx';

export default function Header() {
    const [isMenuExtended, setIsMenuExtended] = useState(false);
    return (
        <header className="shadow-md text-blue-800">
            <div className="h-12 flex flex-wrap px-8 space-x-8 bg-white">
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
                    isOpen={isMenuExtended}
                    toggle={() => setIsMenuExtended(!isMenuExtended)}
                />
                {isMenuExtended ? <br /> : null}
                <Nav isOpen={isMenuExtended} />
            </div>

            <div className="h-4 bg-green-500 bg-split" />
        </header>
    );
}
