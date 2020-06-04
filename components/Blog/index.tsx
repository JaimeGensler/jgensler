import { MDXProvider } from '@mdx-js/react';
import components from './Markdown';
import { CoverPhoto, Footer, Main, Sidebar } from './Layout';

interface FrontMatter {
    title: string;
    date: string;
    subtitle: string;
    coverPhoto: string;
    coverPhotoAlt: string;
    coverPhotoTitle?: string;
}

//should I be using <article> ???
export default function Layout(meta: FrontMatter) {
    return ({ children: content }: any) => {
        return (
            <Main>
                <MDXProvider components={components}>
                    <CoverPhoto
                        src={meta.coverPhoto}
                        alt={meta.coverPhotoAlt}
                        title={meta.coverPhotoTitle}
                    />
                    <components.h1>{meta.title}</components.h1>
                    <p className="text-2xl font-bold italic text-gray-500">
                        {meta.subtitle}
                    </p>
                    <p className="text-right italic mt-4 text-gray-500">
                        {meta.date}
                    </p>

                    <components.hr />
                    {content}
                    <components.hr />

                    <div className="test">
                        <p className="text-center italic text-gray-600">
                            Want to contact me? Feel free to{' '}
                            <components.a href="mailto:jaimegensler0@gmail.com">
                                email me
                            </components.a>{' '}
                            with questions, comments, complaints, or
                            confessions.
                        </p>
                    </div>
                </MDXProvider>
            </Main>
        );
    };
}
