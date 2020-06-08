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
                <div className="flex-1 p-2px text-blue-800 bg-green-500 rounded-md bg-split">
                    <main className="p-12 rounded bg-white text-gray-700">
                        <Post meta={metaData} content={content} />
                    </main>
                </div>

                {/* <div className="flex-1">
                    <Sidebar />
                </div> */}
            </>
        );
    };
}
