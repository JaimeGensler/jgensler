import { frontMatter as posts } from '../../pages/blog/*.mdx';

const links = posts.map((post: any) => {
    console.log(post);
});
export default function Sidebar() {
    return (
        <div className="p-2px text-green-500 bg-blue-800 rounded-md bg-split w-1/4">
            <div className="p-8 rounded bg-white text-black h-full">
                <h2>Other posts</h2>
            </div>
        </div>
    );
}
