import Header from './index';

export default function withHeader(Page: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <>
                <Header />

                <div
                    id="page-content"
                    className="container mx-auto my-8 flex space-x-8"
                >
                    <Page {...props} />
                </div>
            </>
        );
    };
}
