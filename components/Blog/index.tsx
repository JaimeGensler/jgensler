import Post from './Post';
import Sidebar from './Sidebar';
import Card from '../Card';
import clsx from 'clsx';

interface FrontMatter {
    title: string;
    date: string;
    subtitle: string;
    coverPhoto: string;
    coverPhotoAlt: string;
    coverPhotoTitle?: string;
}

//should I be using <article> ???
export default function Layout(metaData: FrontMatter) {
    return ({ children: content }: any) => {
        return (
            <>
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
