const level = [
    (props: any) => <h2 {...props} />,
    (props: any) => <h3 {...props} />,
    (props: any) => <h4 {...props} />,
];

type Props = { item: any; depth: number };
export default function List({ item, depth }: Props) {
    const Heading = level[depth];
    const children =
        'published' in item ? (
            <a href={`/${item.__resourcePath.replace('.mdx', '')}`}>
                {item.title}
            </a>
        ) : (
            Object.keys(item).map(key => (
                <>
                    <Heading className="font-bold">{key}</Heading>
                    <ul>{<List item={item[key]} depth={depth + 1} />}</ul>
                </>
            ))
        );

    return <li className="ml-4">{children}</li>;
}
