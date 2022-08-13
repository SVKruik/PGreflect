import MenuItem from "./MenuItem"

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu_list">
            <MenuItem title="Home" addressTo="home"/>
            <MenuItem title="Careers" addressTo="careers"/>
            <MenuItem title="Faqs" addressTo="faqs"/>
            <MenuItem title="..."/>
            </ul>
        </nav>
    )
}

export default MainMenu