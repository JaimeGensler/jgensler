type Props = {
    src: string;
    alt: string;
    title?: string;
};
export default function CoverPhoto(props: Props) {
    return <img className="rounded-t-md" {...props} />;
}
