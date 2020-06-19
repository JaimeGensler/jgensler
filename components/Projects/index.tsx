import Project from './Project';

const myProjects = [
    {
        title: 'Sudoku Dojo',
        description:
            'A web app to play Sudoku, in which I accidentally recreate Redux.',
        githubLink: 'https://github.com/JaimeGensler/sudoku-dojo',
        tags: ['TypeScript', 'React', 'Immer'],
    },
    {
        title: 'Sudoku Dojo',
        description:
            'A web app to play Sudoku, in which I accidentally recreate Redux.',
        githubLink: 'https://github.com/JaimeGensler/sudoku-dojo',
        tags: ['TypeScript', 'React', 'Immer'],
    },
    {
        title: 'Sudoku Dojo',
        description:
            'A web app to play Sudoku, in which I accidentally recreate Redux.',
        githubLink: 'https://github.com/JaimeGensler/sudoku-dojo',
        tags: ['TypeScript', 'React', 'Immer'],
    },
];

export default function Projects() {
    const projectList = myProjects.map(proj => <Project {...proj} />);
    return (
        <div className="flex w-full flex-wrap">
            {projectList}
            <div className="border-dashed border-4 border-gray-600 rounded-md w-48 h-64 m-4 flex items-center justify-center">
                <h1 className="font-bold text-gray-600 text-3xl text-center">
                    More
                    <br />
                    coming
                    <br />
                    soon!
                </h1>
            </div>
        </div>
    );
}
