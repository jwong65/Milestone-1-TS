//I want to use another file to store the cards.
//Card 1 function to heal by value
function card1Function(card1: { value: number; }, target: string){
    if (Number(card1.value)+playerhealth > 20){
        playerhealth=20;
        displayHealth(playerhealth, target)
        numberofCardplayed+=1
    }
    else{
        playerhealth=playerhealth+card1.value
        displayHealth(playerhealth, target)
        numberofCardplayed+=1
    }
}
//Card 2 function to do damage.
function card2Function(card2: { value: number; }, target: string){
    enemyhealth = enemyhealth - card2.value
    displayHealth(enemyhealth, target)
    numberofCardplayed+=1
}
//Card 3 function to reduce damage
function card3Function(target: string){
    enemyhealth = enemyhealth - (numberofCardplayed*3)
    displayHealth(enemyhealth, target)
    numberofCardplayed+=1
}

//Card 4 function to add cards back to the deck. 
function card4Function(){
    discardpile.forEach(()=>{
        let returnCard:any = discardpile.pop()
        deck.push(returnCard)
        shuffleDeck(deck)
    })
    numberofCardplayed+=1
}


//Card 5 function allows for a second draw
function card5Function(){
    newCard(deck, hand, discardpile)
    newCard(deck, hand, discardpile)
    numberofCardplayed+=1
}

//Card 6 function to do damage equalivent to the number of cards in your hand, including itself.
function card6Function(target: string){
    //For now target is only opponent
    enemyhealth = enemyhealth - (hand.length+1)
    //Hand.length +1 because the pop happens before the card6function is called
    displayHealth(enemyhealth, target)
    numberofCardplayed+=1
}