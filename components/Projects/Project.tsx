import { AiOutlineGithub } from 'react-icons/ai';
import Card from '../Card';
import Tag from './Tag';

type Props = {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    deployedLink?: string;
};

export default function Project({
    title,
    description,
    tags,
    deployedLink,
    githubLink,
}: Props) {
    const tagList = tags.map(text => <Tag text={text} />);
    return (
        <Card>
            <section>
                <div className="flex text-xl">
                    <h1 className="flex-1 font-bold">{title}</h1>
                    <a href={githubLink}>
                        <AiOutlineGithub />
                        <span className="sr-only">View on GitHub</span>
                    </a>
                </div>
                <p className="text-indent-4">{description}</p>
                <div className="flex flex-wrap">{tagList}</div>
            </section>
        </Card>
    );
}
