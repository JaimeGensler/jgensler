import Header from './index';

export default function withHeader(Page: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <>
                <Header />

                <div className="container flex mx-auto my-8 text-gray-700">
                    <Page {...props} />
                </div>
            </>
        );
    };
}
