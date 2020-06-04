import Header from './Header';

export default function withHeader(Page: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <>
                <Header />
                <div className="container mx-auto mt-8 flex space-x-8">
                    <Page {...props} />
                </div>
            </>
        );
    };
}
