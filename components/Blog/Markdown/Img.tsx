type ImgProps = { src: string; alt: string };
export function Img(props: any) {
    return (
        <img
            className="mx-auto max-w-screen-sm border border-solid border-gray-800"
            {...props}
        />
    );
}
