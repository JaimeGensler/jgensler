import { InternalLink } from './Link';

export default function Nav() {
    return (
        <nav className="list-none sm:flex hidden flex-1 px-4 space-x-4">
            <InternalLink href="/about" title="About me">
                About
            </InternalLink>
            <InternalLink href="/blog" title="My blot">
                Blog
            </InternalLink>
        </nav>
    );
}
