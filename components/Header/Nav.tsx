import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { InternalLink, ExternalLink } from './Link';
import clsx from 'clsx';

export default function Nav({ isOpen }: { isOpen: boolean }) {
    const displayType = isOpen ? 'flex-col' : 'hidden';
    return (
        <nav className={clsx('list-none sm:flex sm:flex-1', displayType)}>
            <div className="flex flex-1 px-4 sm:space-x-4 items-center flex-col sm:flex-row">
                <InternalLink href="/blog" title="My blog">
                    Blog
                </InternalLink>
                <InternalLink href="/projects" title="My projects">
                    Projects
                </InternalLink>
            </div>
            <div className="flex">
                <ExternalLink
                    href="https://www.github.com/JaimeGensler/"
                    title="My GitHub"
                >
                    <AiOutlineGithub />
                </ExternalLink>
                <ExternalLink
                    href="https://www.linkedin.com/in/JaimeGensler/"
                    title="My LinkedIn"
                >
                    <AiFillLinkedin />
                </ExternalLink>
                <ExternalLink
                    href="mailto:jaimegensler0@gmail.com"
                    title="Send me an email!"
                >
                    <AiOutlineMail />
                </ExternalLink>
            </div>
        </nav>
    );
}
