import PostList from './PostList';

export default function Sidebar() {
    return (
        <nav>
            <h1 className="text-2xl font-bold">Other Posts</h1>
            <PostList />
        </nav>
    );
}
