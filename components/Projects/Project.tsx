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
        <Card className="w-48 h-64 m-4">
            <section>
                <h1 className="font-bold">{title}</h1>
                <p className="text-justify">{description}</p>
                <div className="flex flex-wrap">{tagList}</div>
            </section>
        </Card>
    );
}
