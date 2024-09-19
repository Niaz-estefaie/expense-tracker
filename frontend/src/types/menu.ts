export interface MenuItems { id: number; title: string; icon: () => JSX.Element; link: string }

export interface NavigationProps {
    active: number;
    setActive: (id: number) => void;
}