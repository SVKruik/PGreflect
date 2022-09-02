import { FC } from "react";
import MenuItem from "./MenuItem";

interface ActionItemProps {
    iconTitle: string;
}

const ActionItem: FC<ActionItemProps> = ({ iconTitle }: any) => {
    return (
        <div className="action-item">
            <MenuItem addressTo="home"><i className={`bi bi-${iconTitle}`}></i></MenuItem>
        </div>
    )
}

export default ActionItem