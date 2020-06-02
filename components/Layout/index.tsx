import Header from './Header';
import Main from './Main';

export default function withLayout(Component: (props: any) => JSX.Element) {
    return (props: any) => {
        return (
            <>
                <Header />
                <div className="container mx-auto mt-8 flex-1">
                    <Main>
                        <Component {...props} />
                    </Main>
                </div>
            </>
        );
    };
}
