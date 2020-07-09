import { sortedPosts, getPostURL } from '../../../utils/post';
import { getDateParts } from '../../../utils/date';
import CollapsableList from './CollapsableList';

const postLinks = sortedPosts.reduce((acc, post) => {
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
        (acc[0].props.children as JSX.Element[]).unshift(
            <CollapsableList title={month} level={1} key={month}>
                {[]}
            </CollapsableList>,
        );
    }

    acc[0].props.children[0].props.children.unshift(
        <li key={post.title}>
            <a
                href={getPostURL(post.__resourcePath)}
                className="font-medium text-green-500 visited:text-blue-800"
            >
                {post.title}
            </a>
        </li>,
    );
    return acc;
}, [] as JSX.Element[]);

export default function PostList() {
    return <ul className="space-y-2">{postLinks}</ul>;
}
