
// const card1 ={
//     type: "Heal",
//     value: "5",
//     text: "This card will heal you for 5 health"
// }
//A fucntion is needed to generate cards.
//This constructor will be used to create cards
// function cardCreation( type:string, value:string, text:string, cardID:number){
//     this.type = type
//     this.value =value
//     this.text = text
//     this.cardID = cardID
// }

class card{ 
    public constructor(type: string, value: number|null, text: string, cardID: string){

    }}

// This is now the way to create cards instead of using the const creating an object
const card1 = new card('heal', 5, 'This card will heal you for 5 health', '1')
const card2 = new card('damage', 3, "This card does 3 damage to your opponent", '2')
const card3 = new card('damage', 3, "This card will do damage equal to the number of cards played this turn, (including this one) times 3", '3')
const card4 = new card('recycle', null, "All cards in the discard pile will be added back to the deck.", '4')
const card5 = new card('draw', 1 , "You can draw two cards.", '5')
//Instead of creating new cardCreation of the damage 2 card, I will push additional copies of the card to generate the deck.
const card6 = new card('damage', null, "This card does damage equal to the number of cards you're holding.", '6')