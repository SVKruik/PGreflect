import Logo from "./components/Logo";
import ActionItem from "./components/ActionItem";
import MainMenu from "./components/MainMenu";
import Search from "./components/Search";
import ExperienceIndicator from "./components/ExperienceIndicator";
import Actions from "./components/Actions";

const Topbar = () => {
    return <header className="topbar">
        <Logo />
        <ActionItem iconTitle="grid"/>
        <MainMenu />
        <Search />
        <ExperienceIndicator />
        <Actions />
        Topbar Placeholder
        </header>;
}

export default Topbar;