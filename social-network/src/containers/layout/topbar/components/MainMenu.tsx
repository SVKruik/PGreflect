import MenuItem from "./MenuItem"

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu_list">
                <MenuItem addressTo="home" isActive>Home</MenuItem>
                <MenuItem addressTo="careers">Careers</MenuItem>
                <MenuItem addressTo="faqs">Faqs</MenuItem>
                <MenuItem addressTo="faqs"><i className="bi bi-three-dots"></i></MenuItem>
            </ul>
        </nav>
    )
}

export default MainMenu