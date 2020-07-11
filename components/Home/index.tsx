import About from './About';
import BlogPosts from './BlogPosts';

export default function Home() {
    return (
        <main className="flex flex-col space-x-0 space-y-8 lg:space-x-8 lg:space-y-0 lg:flex-row">
            <About className="p-8 w-full lg:w-2/3" />
            <BlogPosts className="p-8 w-full lg:w-1/3" />
        </main>
    );
}
