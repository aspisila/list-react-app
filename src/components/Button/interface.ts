export default interface Props {
    color?: 'primary' | 'secondary' | 'default';
    text?: string;
    onClick?: () => any;
    disabled?: boolean | undefined;
}