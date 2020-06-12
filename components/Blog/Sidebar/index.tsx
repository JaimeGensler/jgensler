import { frontMatter as posts } from '../../../pages/blog/*.mdx';
import { getDateObject, getDateParts } from '../../../utils/date';
import List from './List';

const sortedPosts = (posts as any[])
    .sort((a, b) => getDateObject(a.date) - getDateObject(b.date))
    .reduce((acc, post) => {
        if (!post.published) return acc;

        const [, month, day, year] = getDateParts(post.date);
        if (!acc[year]) acc[year] = {};
        if (!acc[year][month]) acc[year][month] = {};
        acc[year][month][day] = post;
        return acc;
    }, {} as any);

export default function Sidebar() {
    return (
        <>
            <h1>Other posts</h1>
            <ul>
                <List item={sortedPosts} depth={0} />
            </ul>
        </>
    );
}
