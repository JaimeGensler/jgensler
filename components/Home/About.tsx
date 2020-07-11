import Card from '../Card';
import SectionHeader from './SectionHeader';

type Props = { className?: string };
export default function About({ className }: Props) {
    return (
        <Card className={className}>
            <section className="flex space-x-8">
                <img
                    src="/me.jpeg"
                    alt="Photo of Jaime Gensler"
                    className="w-64 h-64 rounded-full shadow-md"
                />
                <div>
                    <SectionHeader>Jaime Gensler</SectionHeader>
                    <p className="text-indent-4">
                        Hey there! My name is Jaime, and thanks for checking out
                        my website! Please, take your time to look around and
                        read my blog or check out any projects I have listed! I
                        mostly write about small projects I’m currently working
                        on, or technologies I’m learning. I love{' '}
                        <del>job offers</del>{' '}
                        <ins className="no-underline">emails</ins>, so please
                        feel free to reach out with any questions or comments
                        you have about myself, something I wrote about in my
                        blog, or anything else!
                    </p>
                </div>
            </section>
        </Card>
    );
}
