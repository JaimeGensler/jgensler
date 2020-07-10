//@ts-ignore
import { frontMatter as posts } from '../pages/blog/*.mdx';
import { getUnaryDate } from './date';
import { PostMetadata } from '../types';

export function getPostURL(resourcePath: string) {
    return `/${resourcePath.replace('.mdx', '')}`;
}

export const sortedPosts = (posts as PostMetadata[]).sort(
    (a, b) => getUnaryDate(a.date) - getUnaryDate(b.date),
);

export const mostRecentPostURL = getPostURL(
    sortedPosts[sortedPosts.length - 1].__resourcePath,
);

export function getPostPageTitle(postTitle: string) {
    return `${postTitle} - J Gensler`;
}
