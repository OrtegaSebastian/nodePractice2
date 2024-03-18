import Character from './app/character/Character.js';


try {
    // Create a new Character
    const character = new Character('Sebastian', 1, 'Powarozo');
  
    // Log initial stats
    console.log('Current experience:', character.experienceProgress);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceProgress);
  
  
    // Log stats after interactions
    character.increaseExperience(5);
    console.log('Current experience:', character.experience);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceProgress);
  
    // Set the level
    character.setLevel(49);
    
    // Log stats after setting level
    console.log('Current experience:', character.experience);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceProgress);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
