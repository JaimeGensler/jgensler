import Head from 'next/head';

import Post from './Post';
import Sidebar from './Sidebar';
import Card from '../Card';
import { PostMetadata } from '../../types';

// MDX Layout component is supposed to look like this, don't ask me why.
export default function Layout(metaData: PostMetadata) {
    return ({ children: content }: any) => {
        return (
            <>
                <Head>
                    <title key="page-title">{metaData.title}</title>
                </Head>
                <Card className="flex-3 p-12">
                    <main>
                        <Post meta={metaData} content={content} />
                    </main>
                </Card>

                <div className="flex-1">
                    <Card>
                        <Sidebar />
                    </Card>
                </div>
            </>
        );
    };
}
