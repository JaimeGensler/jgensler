import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
type Props = {
    isOpen: boolean;
    toggle: () => void;
};

export default function MenuButton({ isOpen, toggle }: Props) {
    const Icon = isOpen ? AiOutlineClose : AiOutlineMenu;

    return (
        <button onClick={toggle} className="sm:hidden">
            <Icon />
            <span className="sr-only">Open Menu</span>
        </button>
    );
}
