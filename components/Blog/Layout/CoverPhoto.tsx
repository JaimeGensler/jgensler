type Props = {
    src: string;
    alt: string;
    title?: string;
};
export default function CoverPhoto(props: Props) {
    return (
        <div className="">
            <img className="h-64 rounded-t-md w-full" {...props} />
        </div>
    );
}
