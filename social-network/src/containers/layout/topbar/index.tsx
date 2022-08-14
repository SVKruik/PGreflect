import Logo from "./components/Logo";
import ActionItem from "./components/ActionItem";
import MainMenu from "./components/MainMenu";
import SearchBar from "./components/SearchBar";
import ExperienceIndicator from "./components/ExperienceIndicator";
import ActionsMenu from "./components/ActionsMenu";

const Topbar = () => {
    return <header className="topbar">
        <Logo />
        <ActionItem iconTitle="grid" />
        <MainMenu />
        <SearchBar />
        <ExperienceIndicator />
        <ActionsMenu />
    </header>;
}

export default Topbar;