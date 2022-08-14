const ExperienceIndicator = () => {
    return (
        <div className="experience-indicator_container">
            <div className="experience-indicator_info"></div>
            <span>Next:</span>
            <span>38 EXP</span>
            <div className="experience-indicator_indicator">
                <progress id="experience-indicator" value="63" max="100"></progress>
            </div>
        </div>
    )
}

export default ExperienceIndicator