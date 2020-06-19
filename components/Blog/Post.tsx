import { MDXProvider } from '@mdx-js/react';
import components from './Markdown';
import { getDatetime } from '../../utils/date';

type Props = { meta: any; content: JSX.Element };
export default function Post({ meta, content }: Props) {
    return (
        <MDXProvider components={components}>
            <article>
                <header>
                    <img
                        className="h-64 w-full object-cover border-solid border-gray-600 border"
                        src={meta.coverPhoto}
                        alt={meta.coverPhotoAlt}
                        title={meta.coverPhotoTitle}
                    />
                    <components.h1>{meta.title}</components.h1>
                    <p className="text-xl text-gray-600 mb-2">
                        {meta.subtitle}
                    </p>
                    <time
                        dateTime={getDatetime(meta.date)}
                        className="block text-right italic text-gray-600"
                    >
                        {meta.date}
                    </time>
                </header>

                <components.hr />
                {content}
                <components.hr />

                <footer className="test">
                    <address className="text-center italic text-gray-600">
                        Want to contact me? Feel free to{' '}
                        <components.a href="mailto:jaimegensler0@gmail.com">
                            email me
                        </components.a>{' '}
                        with questions, comments, complaints, or confessions.
                    </address>
                </footer>
            </article>
        </MDXProvider>
    );
}
