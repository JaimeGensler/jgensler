import { MDXProvider } from '@mdx-js/react';
import components from './Markdown';

//should I be using <article> ???
type Props = { meta: any; content: JSX.Element };
export default function Post({ meta, content }: Props) {
    return (
        <MDXProvider components={components}>
            <div className="">
                <img
                    className="h-64 rounded-t-md w-full"
                    src={meta.coverPhoto}
                    alt={meta.coverPhotoAlt}
                    title={meta.coverPhotoTitle}
                />
            </div>
            <components.h1>{meta.title}</components.h1>
            <p className="text-2xl font-bold italic text-gray-500">
                {meta.subtitle}
            </p>
            <p className="text-right italic mt-4 text-gray-500">
                {meta.date.toDateString()}
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
                    with questions, comments, complaints, or confessions.
                </p>
            </div>
        </MDXProvider>
    );
}
