import Experience from '../experience/Experience.js'
import constants from '../constants/Constants.js';

class Character extends Experience{
    constructor(name, level, category, experience = 0) {
        super(experience );
        this.name = name;
        this.level = level;
        this.category = category;         
    }
    _validateLevel(level ) {
        // Implement your specific validation logic here
        if (isNaN(level) || level < 1 || level > constants.MAX_LEVEL) {
        throw new Error(`Invalid level: ${level}`);
        }
    }
    
    set level(newLevel) {
        try {
        this._validateLevel(newLevel);
        super.level = newLevel;
        } catch (error) {
        console.error(`Error al establecer el nivel: ${error.message}`);
        }
    } 
    increaseExperience(exp) {
        super.increaseExperience(exp)
    }    
    get experienceProgress(){
        const nextLevelExperience = super._calculateLevel(this.level + 1)
        return Math.min(1, this.experience / nextLevelExperience)
    }     
}

export default Character;

