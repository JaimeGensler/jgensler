import Post from './Post';
import Sidebar from './Sidebar';

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
                <main className="p-12 shadow-md rounded-md bg-white text-gray-700">
                    <Post meta={metaData} content={content} />
                </main>

                {/* <div className="flex-1">
                    <Sidebar />
                </div> */}
            </>
        );
    };
}
