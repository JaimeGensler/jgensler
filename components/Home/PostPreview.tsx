import { mostRecentPost } from '../../utils/post';

export default function PostPreview() {
    return (
        <div className="flex flex-col">
            <h2>My most recent post ({mostRecentPost.date})</h2>
            <img
                src={mostRecentPost.coverPhoto}
                alt={mostRecentPost.coverPhoto}
                className="mx-auto w-1/2"
            />
            <h3>{mostRecentPost.title}</h3>
            <p>{mostRecentPost.subtitle}</p>
        </div>
    );
}
