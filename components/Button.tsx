import {globalColors} from '../helpers/styleUtils'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    action: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({ label, action, ...props}) => {
    return (
        <>
    <button onClick={action}{...props}>{label}</button>
    <style jsx>{`
        background-color: ${globalColors.primary};
        color: white;
        border-radius: 40px;
        font-size: 1.4rem;
        height: 50px;
        width: 180px;

        :hover {
            cursor: pointer;
        }
    `}</style>
    </>
    )
}

export default Button;