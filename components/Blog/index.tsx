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
            <div className="w-full flex flex-col-reverse space-x-0 lg:flex-row lg:space-x-8">
                <Head>
                    <title key="page-title">
                        {getPostPageTitle(metaData.title)}
                    </title>
                </Head>
                <main className="w-full lg:w-2/3">
                    <Card className="p-8">
                        <Post meta={metaData} content={content} />
                    </Card>
                </main>

                <div className="w-full mb-6 lg:w-1/3 lg:mb-0">
                    <Card className="p-8">
                        <Sidebar />
                    </Card>
                </div>
            </div>
        );
    };
}
