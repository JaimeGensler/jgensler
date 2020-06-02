import { InternalNav, ExternalNav } from './NavItem';
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';

export default function Header() {
    return (
        <header className="h-16 shadow-md">
            <div className="flex h-12 px-8 space-x-8 bg-white">
                <h1 className="flex items-center font-bold text-2xl text-blue-800">
                    J Gensler
                </h1>
                <nav className="list-none flex flex-1 px-4 space-x-4">
                    <InternalNav href="/about" title="About me">
                        About
                    </InternalNav>
                    <InternalNav href="/blog" title="My blot">
                        Blog
                    </InternalNav>
                </nav>
                <ul className="list-none flex space-x-4">
                    <ExternalNav
                        href="https://www.github.com/JaimeGensler/"
                        title="My GitHub"
                    >
                        <AiOutlineGithub />
                    </ExternalNav>
                    <ExternalNav
                        href="https://www.linkedin.com/in/JaimeGensler/"
                        title="LinkedIn"
                    >
                        <AiFillLinkedin />
                    </ExternalNav>
                    <ExternalNav
                        href="mailto:jaimegensler0@gmail.com"
                        title="Send me an email!"
                    >
                        <AiOutlineMail />
                    </ExternalNav>
                </ul>
            </div>
            <div className="h-4 text-blue-800 bg-green-500 divider-slash" />
        </header>
    );
}
