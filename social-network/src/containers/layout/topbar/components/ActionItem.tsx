import { FC } from "react";

interface ActionItemProps {
    iconTitle: string;
}

const ActionItem: FC<ActionItemProps> = ({ iconTitle }: any) => {
    return (
        <div className="action-item">
            <i className={`bi bi-${iconTitle}`}></i>
        </div>
    )
}

export default ActionItem