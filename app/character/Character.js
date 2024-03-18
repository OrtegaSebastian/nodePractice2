import Experience from "../experience/Experience.js";
import constants from "../constants/Constants.js";

class Character extends Experience {
    constructor(name, level, category, experience = 0) {
        super(experience);
        this.name = name;
        this.level = level;
        this.category = category;
    }
    _validateLevel(level) {
        // Implement your specific validation logic here
        if (isNaN(level) || level < 1 || level > constants.MAX_LEVEL) {
            throw new Error(`Invalid level: ${level}`);
        }
    }

    setLevel(newLevel) {
        try {
            const parsedLevel = parseInt(newLevel, 10);
            if (
                isNaN(parsedLevel) ||
                parsedLevel < 1 ||
                parsedLevel > constants.MAX_LEVEL
            ) {
                throw new Error(`Invalid level: ${newLevel}`);
            }
            this._validateLevel(parsedLevel);
            super.level = parsedLevel;
        } catch (error) {
            console.error(`Error al establecer el nivel: ${error.message}`);
        }
    }
    increaseExperience(exp) {
        super.increaseExperience(exp);
    }
    get experienceProgress() {
        const nextLevel = this.level + 1;
        if (nextLevel > constants.MAX_LEVEL) {
            return 0;
        }
        const baseExperience = constants.BASE_EXPERIENCE;
        const experienceMultiplier = constants.EXPERIENCE_MULTIPLIER;
        const requiredExperience =
            baseExperience + experienceMultiplier * (nextLevel - 1);
        return Math.min(1, this.experience / requiredExperience);
    }
    experienceToNextLevel() {
        const nextLevel = this.level + 1;
        if (nextLevel > constants.MAX_LEVEL) {
            return 0;
        }

        // Prevent infinite loop by checking for 0 experience
        if (this.experience === 0) {
            return 0;
        }

        const baseExperience = constants.BASE_EXPERIENCE;
        const experienceMultiplier = constants.EXPERIENCE_MULTIPLIER;

        // Calculate required experience up to the next level
        let requiredExperience = baseExperience;
        for (let i = 1; i < nextLevel; i++) {
            requiredExperience += experienceMultiplier * i;
        }

        return Math.min(1, this.experience / requiredExperience);
    }
}

export default Character;
