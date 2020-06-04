import { withLayout, withBlogLayout } from '../components/Layout';

function Home() {
    return (
        <div>
            <p>There's nothing on this page</p>
        </div>
    );
}

export default withBlogLayout(Home);
