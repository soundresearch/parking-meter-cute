import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const TaskDropDown = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    }

    return (
      <div className="task-dropdown" onClick={toggleMenu}>
        <div className="task-header">
            Tasks
            {!expanded ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {expanded && (
            <div className="task-details">
                1. Drag and drop the <span style={{color: "#0087E2", fontWeight: "bold"}}>credit card</span> into the card slot<br />
                2. <b>Add at least 1 hour</b> of time to the parking meter using the <span style={{color: "#4680ED", fontWeight: "bold"}}>+ button</span> on the parking meter<br />
                3. <b>Remove 30 minutes</b> of time from the parking meter using the <span style={{color: "#4680ED", fontWeight: "bold"}}>- button</span><br />
                4. Select <span style={{color: "#33873b", fontWeight: "bold"}}>OK</span> (green button on the parking meter)<br /><br />
                5. Drag and drop the <span style={{color: "#0087E2", fontWeight: "bold"}}>credit card</span> into the card slot again<br />
                6. <b>Add at least 1 hour</b> of time to the parking meter using the <span style={{color: "#4680ED", fontWeight: "bold"}}>+ button</span> on the parking meter<br />
                7. <b>Remove 1 hour</b> of time from the parking meter using the <span style={{color: "#4680ED", fontWeight: "bold"}}>- button</span><br />
                8. Select <span style={{color: "#eb2f2f", fontWeight: "bold"}}>CANCEL</span> (red button on the parking meter)<br /><br />
                <b>When you have completed the tasks, you can close the window and return to the survey.</b>
            </div>
        )}
      </div>
    );
  }
  
  export default TaskDropDown;