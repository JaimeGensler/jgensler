import { frontMatter as posts } from '../../pages/blog/*.mdx';
import { getDateObject, getDateParts } from '../../utils/date';

const sortedPosts = (posts as any[])
    .sort((a, b) => getDateObject(a.date) - getDateObject(b.date))
    .reduce((acc, post) => {
        if (!post.published) return acc;

        const [, month, , year] = getDateParts(post.date);
        if (!acc[year]) acc[year] = {};
        if (!acc[year][month]) acc[year][month] = [];
        acc[year][month].push(post);
        return acc;
    }, {} as any);

export default function Sidebar() {
    // Satan himself could not write worse code than this.
    // For the love of god fix this garbage.
    const list = Object.keys(sortedPosts).map(year => {
        return (
            <li>
                {year}
                <ul>
                    {Object.keys(sortedPosts[year]).map(month => {
                        return (
                            <li>
                                {month}
                                <ul>
                                    {sortedPosts[year][month].map(
                                        (post: any) => {
                                            return (
                                                <li key={post.title}>
                                                    <a
                                                        href={`/${post.__resourcePath.replace(
                                                            '.mdx',
                                                            '',
                                                        )}`}
                                                    >
                                                        {post.title}
                                                    </a>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    });

    return (
        <div className="p-2px text-green-500 bg-blue-800 rounded-md bg-split">
            <div className="p-8 rounded bg-white text-gray-800">
                <h2>Other posts</h2>
                <ul>{list}</ul>
            </div>
        </div>
    );
}
