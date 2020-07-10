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
            <section className="space-y-2">
                <div className="flex">
                    <h1 className="flex-1 font-bold text-xl">{title}</h1>
                    <a href={githubLink}>
                        <AiOutlineGithub className="text-3xl rounded-full transition-color duration-200 hover:bg-gray-700 hover:text-white" />
                        <span className="sr-only">View on GitHub</span>
                    </a>
                </div>
                <p className="text-indent-4">{description}</p>
                <div className="flex flex-wrap">{tagList}</div>
            </section>
        </Card>
    );
}
