type ImgProps = { src: string; alt: string };
export function Img(props: ImgProps) {
    return (
        <img
            className="mx-auto rounded shadow max-w-screen-sm border border-solid border-gray-600"
            {...props}
        />
    );
}
