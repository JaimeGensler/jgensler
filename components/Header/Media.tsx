import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { ExternalLink } from './Link';

export default function Media() {
    return (
        <ul className="hidden sm:flex">
            <ExternalLink
                href="https://www.github.com/JaimeGensler/"
                title="My GitHub"
            >
                <AiOutlineGithub />
            </ExternalLink>
            <ExternalLink
                href="https://www.linkedin.com/in/JaimeGensler/"
                title="LinkedIn"
            >
                <AiFillLinkedin />
            </ExternalLink>
            <ExternalLink
                href="mailto:jaimegensler0@gmail.com"
                title="Send me an email!"
            >
                <AiOutlineMail />
            </ExternalLink>
        </ul>
    );
}
