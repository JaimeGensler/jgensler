//@ts-ignore
import { frontMatter as posts } from '../pages/blog/*.mdx';
import { getUnaryDate } from './date';
import { PostMetadata } from '../types';

export function getPostURL(resourcePath: string) {
    return `/${resourcePath.replace('.mdx', '')}`;
}
export function getPostPageTitle(postTitle: string) {
    return `${postTitle} - J Gensler`;
}

export const sortedPosts = (posts as PostMetadata[])
    .sort((a, b) => getUnaryDate(a.date) - getUnaryDate(b.date))
    .filter(post => post.published);

export const mostRecentPost = sortedPosts[sortedPosts.length - 1];
export const mostRecentPostURL = getPostURL(
    sortedPosts[sortedPosts.length - 1].__resourcePath,
);
