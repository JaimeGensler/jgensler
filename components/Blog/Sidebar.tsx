import PostList from '../PostList';

export default function Sidebar() {
    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-bold">Other Posts</h1>
            <hr className="border-gray-600" />
            <PostList />
        </div>
    );
}
