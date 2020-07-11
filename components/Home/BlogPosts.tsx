import Card from '../Card';
import PostList from '../PostList';
import SectionHeader from './SectionHeader';
import { mostRecentPost, mostRecentPostURL } from '../../utils/post';
import PostPreview from './PostPreview';

type Props = { className?: string };
export default function BlogPosts({ className }: Props) {
    return (
        <Card className={className}>
            <section className="space-y-2">
                <SectionHeader>Blog Posts</SectionHeader>
                <PostPreview />
                <PostList />
            </section>
        </Card>
    );
}
