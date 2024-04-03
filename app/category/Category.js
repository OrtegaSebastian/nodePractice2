
class Category {
    constructor(name , description, attributes){
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }

    //Utility metho to get an attirubte value

    getAttributeValue(attributeName){
        const attribute = this.attributes.find(attr => attr.name === attributeName);
    return attribute ? attribute.value : 0;
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

    dealPhysicalDamage(atackType){
        const baseDamage = Math.floor(Math.random() * (this.getStrength() *2) + 1);
        console.log(`${this.name} strikes with ${atackType}, dealing ${baseDamage} damage!`);
    }

    //Warrior Atacks 
    swingSword(){
        this.dealPhysicalDamage('a powerful sword swing')
    }

    chargeAtack(){
        this.dealPhysicalDamage('a charging attack')
        const chanceToStun = Math.random() < 0.13;
        if(chanceToStun){
            console.log(' - Enemy is stunned for 1 turn( cannot atack or use abilities)')
        }        
    }
    
    shieldBash(){
        this.dealPhysicalDamage('a shield bash')
        this.attributes.find(attr => attr.name === 'Defense').value += 5;
        console.log(' - May also increase defense for the next turn')    
    }

    //Assasin
    getAgility(){
        return this.getAttributeValue('Agility')
    }

    performStealthAtack(attackType){
        const criticalChance = Math.random() //critical Chance
        if(criticalChance < this.getAgility()*0.15){ //addjust critical chance modifier
        console.log(`${this.name}'s ${attackType} critically strikes from the shadows!`);    
        }
        else{
            console.log(`${this.name} strikes from the shadows with ${attackType}!`);
        }l
    }
        
    backStab(){
        this.performStealthAtack('a deadly backstab')
        const cristicalDamageMultiplier = 2;
        if(criticalChance){
            console.log(`- Deals ${cristicalDamageMultiplier} x damage due to critical hit`)
        }
    }
    poisonDagger(){
        this.performStealthAtack('a poisoned dagger')
        console.log( '  - Applies poison damage over time ')
    }

    vanish(){
        console.log(`${this.name} disappears into the shadows!`);
        this.attributes.find(attr => attr.name === 'Detection').value -= 0.5
    }
   
}


export { Category}  