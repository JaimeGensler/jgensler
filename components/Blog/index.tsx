import { MDXProvider } from '@mdx-js/react';
import { withBlogLayout } from '../Layout';
import components from './Markdown';
import CoverPhoto from './CoverPhoto';

interface FrontMatter {
    title: string;
    date: string;
    subtitle: string;
    coverPhoto: string;
    coverPhotoAlt: string;
    coverPhotoTitle?: string;
}

export default function Layout({
    title,
    date,
    subtitle,
    coverPhoto,
    coverPhotoAlt,
    coverPhotoTitle,
}: FrontMatter) {
    return withBlogLayout(({ children: content }) => {
        return (
            <MDXProvider components={components}>
                <CoverPhoto
                    src={coverPhoto}
                    alt={coverPhotoAlt}
                    title={coverPhotoTitle}
                />
                <components.h1>{title}</components.h1>
                <p className="text-2xl font-bold italic text-gray-500">
                    {subtitle}
                </p>
                <div className="w-full h-2px bg-gray-900 my-6" />
                {content}
            </MDXProvider>
        );
    });
}
