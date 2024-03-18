import constants from "../constants/Constants.js";
class Experience {
    constructor(experience = 0, level = 1) {
        this._experience = experience;
        this._level = level;
    }

    //Private methods
    _calculateLevel() {
        let level = 1;
        let requiredExperience = constants.BASE_EXPERIENCE;
        while (
            this._experience >= requiredExperience &&
            level < constants.MAX_LEVEL
        ) {
            level++;
            requiredExperience += constants.EXPERIENCE_MULTIPLIER * level;
        }
        return level;
    }

    get experience() {
        return this._experience;
    }

    set experience(newExperience) {
        try {
            if (isNaN(newExperience) || newExperience < 0) {
                throw new Error("Invalid experience value");
            }
            this._experience = newExperience;
            this.level = this._calculateLevel(newExperience);
        } catch (error) {
            console.error(`Error Setting Experience: ${error.message}`);
        }
    }

    increaseExperience(exp) {
        this.experience += exp;
    }

    get experienceRemaining() {
        const nextLevel = this._level + 1; // Use _level for internal calculation
        if (nextLevel > constants.MAX_LEVEL) {
            return 0;
        }
        const requiredExperience =
            constants.BASE_EXPERIENCE +
            constants.EXPERIENCE_MULTIPLIER * (nextLevel - 1);
        return Math.max(0, requiredExperience - this.experience);
    }
    get experienceToNextLevel() {
        const nextLevel = this.level + 1;
        if (nextLevel > constants.MAX_LEVEL) {
            return 0;
        }
        const requiredExperience =
            constants.BASE_EXPERIENCE +
            constants.EXPERIENCE_MULTIPLIER * (nextLevel - 1);
        return Math.max(0, requiredExperience - this.experience);
    }

    getRequiredExperienceForNextLevel() {
        const nextLevel = this.level + 1;
        if (nextLevel > constants.MAX_LEVEL) {
            return 0;
        }
        const requiredExperience =
            constants.BASE_EXPERIENCE +
            constants.EXPERIENCE_MULTIPLIER * (nextLevel - 1);
        return requiredExperience - this.experience;
    }

}

export default Experience;