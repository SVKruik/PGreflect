const ExperienceIndicator = () => {
    const nextlevel = 38
    return (
        <div className="experience-indicator_container">
            <div className="experience-indicator_info">
                <span>Next:</span>
                <span>{nextlevel} exp</span>
            </div>
            <progress value="63" max="100"></progress>
        </div>
    )
}

export default ExperienceIndicator