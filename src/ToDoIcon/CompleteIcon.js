import React from "react";
import { ToDoIcon } from "./";

function CompleteIcon ({completed,onToggle}) {
    return (
        <ToDoIcon
            type = "check"
            color = {completed? 'green':'gray'}
            onClick = {onToggle}
        />
    );
}

export { CompleteIcon };