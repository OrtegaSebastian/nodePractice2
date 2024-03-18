import Character from './app/character/Character.js';


try {
    const character = new Character('Sebastian', 1, 'Powarozo');

    console.log('Current experience:', character.experience);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceToNextLevel);

    // ... (Your character interactions here)

    console.log('Current experience:', character.experience);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceToNextLevel);

    character.setLevel(49);

    console.log('Current experience:', character.experience);
    console.log('Level:', character.level);
    console.log('Experience to next level:', character.experienceToNextLevel);
} catch (error) {
    console.error('Error:', error.message);
}