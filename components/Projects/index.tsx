import Project from './Project';
import myProjects from './myProjects.json';

export default function Projects() {
    const projectList = myProjects.map(proj => <Project {...proj} />);
    return (
        <main className="grid grid-auto-rows-1 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectList}

            <section className="flex items-center justify-center border-dashed border-4 border-gray-600 rounded-md">
                <h1 className="font-bold text-gray-600 text-3xl text-center">
                    More
                    <br />
                    coming
                    <br />
                    soon!
                </h1>
            </section>
        </main>
    );
}
