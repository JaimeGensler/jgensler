import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

type Comp = (props: any) => JSX.Element;

const createWithLayout = (isBlog: boolean) => (Page: Comp) => (props: any) => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-8 flex space-x-8">
                <Main>
                    <Page {...props} />
                </Main>
                {isBlog ? <Sidebar /> : null}
            </div>
        </>
    );
};

export const withLayout = createWithLayout(false);
export const withBlogLayout = createWithLayout(true);
