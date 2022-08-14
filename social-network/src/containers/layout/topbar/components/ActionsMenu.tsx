import ActionItem from "./ActionItem"

const ActionsMenu = () => {
    return (
        <div className="actions-menu_container">
            <div className="actions-menu_group">
            <ActionItem iconTitle="bag"/>
            <ActionItem iconTitle="emoji-smile"/>
            <ActionItem iconTitle="chat-left-text"/>
            <ActionItem iconTitle="bell"/>
            </div>
            <ActionItem iconTitle="gear"/>
        </div>
    )
}

export default ActionsMenu