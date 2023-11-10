import {
    Explorer103
} from "@react95/icons";
import '@react95/icons/icons.css';

const DesktopIcon = ({onClick, icon, text}) => (
    <div className="desktopIcon" onClick={() => (onClick(text))}>
        {icon}
        <p>{text}</p>
    </div>
);

export default DesktopIcon