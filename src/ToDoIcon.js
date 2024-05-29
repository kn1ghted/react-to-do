import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

// Import stylesheet
import './ToDoIcon.css';

// Object for icon types
const iconTypes = {
    "check" : (color) => <CheckSVG className='icon-svg' fill={color}/>,
    "delete" : (color) => <DeleteSVG className='icon-svg' fill={color}/>,
}

function ToDoIcon({type, color, onClick}) {
    return (
        <span
            className={`icon-container icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { ToDoIcon };