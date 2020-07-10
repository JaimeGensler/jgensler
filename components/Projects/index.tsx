import Project from './Project';
import CardContainer from './CardContainer';
import myProjects from './myProjects.json';

export default function Projects() {
    const projectList = myProjects.map(proj => (
        <CardContainer>
            <Project {...proj} />
        </CardContainer>
    ));
    return (
        <main className="flex w-full justify-between flex-wrap">
            {projectList}
            <CardContainer>
                <section className="flex items-center justify-center border-dashed border-4 border-gray-600 rounded-md h-full">
                    <h1 className="font-bold text-gray-600 text-3xl text-center">
                        More
                        <br />
                        coming
                        <br />
                        soon!
                    </h1>
                </section>
            </CardContainer>
        </main>
    );
}
