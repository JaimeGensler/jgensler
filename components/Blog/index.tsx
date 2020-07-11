import Head from 'next/head';

import Post from './Post';
import Sidebar from './Sidebar';
import Card from '../Card';
import { PostMetadata } from '../../types';
import { getPostPageTitle } from '../../utils/post';

// MDX Layout component is supposed to look like this, don't ask me why.
export default function Layout(metaData: PostMetadata) {
    return ({ children: content }: any) => {
        return (
            <>
                <Head>
                    <title key="page-title">
                        {getPostPageTitle(metaData.title)}
                    </title>
                </Head>

                <Card className="p-8 w-2/3">
                    <main>
                        <Post meta={metaData} content={content} />
                    </main>
                </Card>

                <Card className="p-8 w-1/3">
                    <Sidebar />
                </Card>
            </>
        );
    };
}
