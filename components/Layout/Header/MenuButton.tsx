import { AiOutlineMenu } from 'react-icons/ai';

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

export default function MenuButton({ isOpen, onClick }: Props) {
    return (
        <button onClick={onClick} className="sm:hidden">
            <AiOutlineMenu className="" />
        </button>
    );
}
