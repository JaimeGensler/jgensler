import { frontMatter as posts } from '../../../pages/blog/*.mdx';
import { getUnaryDate, getDateParts } from '../../../utils/date';
import CollapsableList from './CollapsableList';
import { PostFrontMatter } from '../../../types';

const sortedPosts = (posts as PostFrontMatter[])
    .sort((a, b) => getUnaryDate(a.date) - getUnaryDate(b.date))
    .reduce((acc, post) => {
        if (!post.published) return acc;

        const [, month, , year] = getDateParts(post.date);
        if (acc[0]?.key !== year) {
            acc.unshift(
                <CollapsableList title={year} level={0} key={year}>
                    {[]}
                </CollapsableList>,
            );
        }
        if (acc[0].props.children[0]?.key !== month) {
            acc[0].props.children.unshift(
                <CollapsableList title={month} level={1} key={month}>
                    {[]}
                </CollapsableList>,
            );
        }

        acc[0].props.children[0].props.children.unshift(
            <li key={post.title}>
                <a
                    href={`/${post.__resourcePath.replace('.mdx', '')}`}
                    className="font-medium text-green-500 visited:text-blue-800"
                >
                    {post.title}
                </a>
            </li>,
        );
        return acc;
    }, [] as JSX.Element[]);

export default function Sidebar() {
    return (
        <nav>
            <h1 className="text-2xl font-bold">Other Posts</h1>
            <ul className="ml-2 space-y-2">{sortedPosts}</ul>
        </nav>
    );
}
