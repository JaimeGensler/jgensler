import Head from 'next/head';
import Home from '../components/Home';

export default function HomePage() {
    return (
        <>
            <Head>
                <title key="page-title">Home - J Gensler</title>
            </Head>

            <Home />
        </>
    );
}
