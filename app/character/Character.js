import Experience from '../experience/Experience.js'
import constants from '../constants/Constants.js';

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
            if (isNaN(parsedLevel) || parsedLevel < 1 || parsedLevel > constants.MAX_LEVEL) {
                throw new Error(`Invalid level: ${newLevel}`);
            }
            this._validateLevel(parsedLevel);
            super.level = parsedLevel;
        } catch (error) {
            console.error(`Error al establecer el nivel: ${error.message}`);
        }
    }
    increaseExperience(exp) {
        super.increaseExperience(exp)
    }
    // get experienceProgress() {
    //     const nextLevelExperience = super._calculateLevel(this.level + 1)
    //     return Math.min(1, this.experience / nextLevelExperience)
    // }

    getExperienceProgress() {
        const nextLevelExperience = this.getNextLevelExperience();
        // Check if nextLevelExperience exists and is a number
        if (typeof nextLevelExperience !== 'number') {
          console.error('Error calculating experience progress: Invalid next level experience');
          return 0; // Or handle the error differently
        }
        return Math.min(1, this.experience / nextLevelExperience);
      }
}

export default Character;

