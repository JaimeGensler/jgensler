import Projects from '../components/Projects';
import Head from 'next/head';

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title key="page-title">Projects - J Gensler</title>
            </Head>
            <Projects />
        </>
    );
}
