import Character from './app/character/Character.js';

// Creating categories
const wizardCategory = new Category('Wizard', 'Specialist in elemental magic', [
  { name: 'Mana', value: 10 },
  { name: 'Wisdom', value: 10 },
  { name: 'Mana', value: 12 },
]);

const warriorCategory = new Category('Warrior', 'Specialist in hand-to-hand combat', [
  { name: 'Strength', value: 14 },
  { name: 'Dexterity', value: 8 },
  { name: 'Vitality', value: 12 },
  { name: 'Defense', value: 10 },
]);

const assassinCategory = new Category('Assassin', 'Specialist in stealth and deception', [
  { name: 'Dexterity', value: 12 },
  { name: 'Agility', value: 10 },
  { name: 'Luck', value: 8 },
  { name: 'Detection', value: 8 },
]);

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
