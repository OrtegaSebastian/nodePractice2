import Character from './app/character/Character.js';


try {
  // Create a new Character
  const character = new Character('Sebastian', 1, 'Powarozo');

  // Log initial stats
  console.log(`Current experience: ${character.experience}/${character.getRequiredExperienceForNextLevel(character.level + 1)}`);
  console.log(`Experience progress: ${(character.experienceToNextLevel() * 100).toFixed(2)}%`);

  // Log stats after interactions
  character.increaseExperience(5);
  console.log(`\nCurrent experience: ${character.experience}/${character.getRequiredExperienceForNextLevel(character.level + 1)}`);
  console.log(`Experience progress: ${(character.experienceToNextLevel() * 100).toFixed(2)}%`);

  // Log stats after setting level
  character.setLevel(49);
  console.log(`\nCurrent experience: ${character.experience}/${character.getRequiredExperienceForNextLevel(character.level + 1)}`);
  console.log(`Experience progress: ${(character.experienceToNextLevel() * 100).toFixed(2)}%`);

} catch (error) {
  console.error('Error:', error.message);
}
