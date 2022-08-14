const ExperienceIndicator = () => {
    const nextlevel = 38
    return (
        <div className="experience-indicator_container">
            <div className="experience-indicator_info"></div>
            <span className="experience-indicator_span1">Next:</span>
            <span className="experience-indicator_span2">{nextlevel} exp</span>
            <div className="experience-indicator_indicator">
                <progress className="experience-indicator_bar" value="63" max="100"></progress>
            </div>
        </div>
    )
}

export default ExperienceIndicator