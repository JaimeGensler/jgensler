import parseDate from './parseDate';
type Post = {
    published: boolean;
    date: Date;
    [key: string]: any;
};
export default function structurePosts(posts: Post[]) {
    return posts.reduce((acc, post) => {
        if (!post.published) return acc;

        const [, , month, day, year] = parseDate(post.date).match(
            /([a-z]+), ([a-z]+) ([0-9]{1,2})[snrt][tdh], ([0-9]{4})/i,
        ) as string[];
        if (!acc[year]) acc[year] = {};
        if (!acc[year][month]) acc[year][month] = {};
        acc[year][month][day] = post;

        return acc;
    }, {} as any);
}

// const structurePosts = (posts as any[])
//     .sort((a, b) => parseDate(a.date) - parseDate(b.date))
//     .reduce((acc, post) => {
//         const [, month, , year] = getDateParts(post.date);
//         const postComp = (
//             <li key={post.title}>
//                 <a href={`/${post.__resourcePath.replace('.mdx', '')}`}>
//                     {post.title}
//                 </a>
//             </li>
//         );
//         const yearList = acc.props.children.find(
//             (node: any) => node.key === year,
//         );
//         if (!yearList) {
//             acc.props.children.push(
//                 <li key={year}>
//                     {year}
//                     <ul>
//                         <li key={month}>
//                             {month}
//                             <ul>{postComp}</ul>
//                         </li>
//                     </ul>
//                 </li>,
//             );
//         }
//         const monthList = yearList.props.children.find(
//             (node: any) => node.key === month,
//         );
//         if (!monthList) {
//         }

//         acc.props.children.push(postComp);
//         return acc;
//     }, <ul>{[]}</ul>);
