import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import clsx from 'clsx';
import { InternalLink, ExternalLink } from './Link';
import { mostRecentPostURL } from '../../utils/post';

export default function Nav({ isOpen }: { isOpen: boolean }) {
    const displayType = isOpen ? 'flex-col' : 'hidden';
    return (
        <nav className={clsx('list-none sm:flex sm:flex-1', displayType)}>
            <div className="flex flex-1 px-4 sm:space-x-4 items-center flex-col sm:flex-row">
                <InternalLink href={mostRecentPostURL} title="My blog">
                    Blog
                </InternalLink>
                <InternalLink href="/projects" title="My projects">
                    Projects
                </InternalLink>
            </div>
            <div className="flex">
                <ExternalLink href="https://www.github.com/JaimeGensler/">
                    <span className="sr-only">My Github</span>
                    <AiOutlineGithub />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/JaimeGensler/">
                    <span className="sr-only">My LinkedIn</span>
                    <AiFillLinkedin />
                </ExternalLink>
                <ExternalLink href="mailto:jaimegensler0@gmail.com">
                    <span className="sr-only">My Email</span>
                    <AiOutlineMail />
                </ExternalLink>
            </div>
        </nav>
    );
}
