type ImgProps = { src: string; alt: string };
export function Img(props: any) {
    return (
        <img
            className="mx-auto rounded shadow max-w-screen-sm border border-solid border-gray-600"
            {...props}
        />
    );
}
