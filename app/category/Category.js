


class Category {
    constructor(name , description, attributes){
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }

    //Methods for each category

    //Wizard
    
    getMana(){
        return this.getAttributeValue('Mana')
    }

    castSpell(spellName){
        const manaCost = {
            'Fireball': 10,
            'Frostbolt': 8,
            'Lightningbolt': 15
        } [spellName]
        if(this.getMana()>= manaCost){
            this.attributes.find(attr => attr.name === 'Mana').value -= manaCost;
            console.log(`${this.name} casts ${spellName}, consuming ${manaCost} mana!`);
        switch(spellName){
            case 'Fireball':
                console.log(' - Deals Fire damage to the enemy')
                break
            case 'Frostbolt':
                console.log(' - Deals Frost damage and has a chante to freeze the enemy')
                break
            case Lightningbolt:
                console.log(' - Deals Lightning damage to the enemy')        
        }

        }else{
            console.log(`${this.name} does not have enough mana to cast ${spellName}`)
        }

    }

    //Warrior

    getStrength(){
        return this.getAttributeValue('Strength')
    }

    dealPhysicalDamage(damage){
        return this.getAttributeValue(damage)
    }

    //Rogue
    getAgility(){
        return this.getAttributeValue('Agility')
    }

    performStealthAtack(){
     
    }

    getAttributeValue(attributeName){
        const attribute = this.attributes.find(attr => attr.name === attributeName);
    return attribute ? attribute.value : 0;
    }
}

// Creating categories
const wizardCategory = new Category('Wizard', 'Specialist in elemental magic', [
    { name: 'Mana', value: 12 },
    { name: 'Wisdom', value: 10 },
    { name: 'Mana', value: 15 },
  ]);
  
  const warriorCategory = new Category('Warrior', 'Specialist in hand-to-hand combat', [
    { name: 'Strength', value: 10 },
    { name: 'Dexterity', value: 8 },
    { name: 'Vitality', value: 12 },
  ]);
  
  const assassinCategory = new Category('Assassin', 'Specialist in stealth and deception', [
    { name: 'Dexterity', value: 12 },
    { name: 'Agility', value: 10 },
    { name: 'Luck', value: 8 },
  ]);

export { Category, wizardCategory, warriorCategory, assassinCategory }  