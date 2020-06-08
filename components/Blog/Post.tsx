import { MDXProvider } from '@mdx-js/react';
import components from './Markdown';

//should I be using <article> ???
type Props = { meta: any; content: JSX.Element };
export default function Post({ meta, content }: Props) {
    return (
        <MDXProvider components={components}>
            <img
                className="h-64 w-full object-cover border-solid border-gray-800 border"
                src={meta.coverPhoto}
                alt={meta.coverPhotoAlt}
                title={meta.coverPhotoTitle}
            />
            <components.h1>{meta.title}</components.h1>
            <p className="text-xl font-bold italic text-gray-500 text-indent-8">
                {meta.subtitle}
            </p>
            <p className="text-right italic mt-4 text-gray-500">{meta.date}</p>
            <components.hr />

            {content}

            <components.hr />
            <div className="test">
                <p className="text-center italic text-gray-600">
                    Want to contact me? Feel free to{' '}
                    <components.a href="mailto:jaimegensler0@gmail.com">
                        email me
                    </components.a>{' '}
                    with questions, comments, complaints, or confessions.
                </p>
            </div>
        </MDXProvider>
    );
}
