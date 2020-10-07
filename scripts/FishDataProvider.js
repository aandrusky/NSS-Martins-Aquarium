const fishCollection = [
    {
        name: "Nemo",
        food: "crustaceans",
        species: "clownfish",
        length: 4.3,
        location: "Red Sea",
        image: "https://cdn.powered-by-nitrosell.com/product_images/11/2575/large-common%20clown.jpg"
    }
    {
        name: "Maverick",
        food: "Sea Urchins",
        species: "triggerfish",
        length: 28,
        location: "Nova Scotia",
        image: "https://churaumi.okinawa/userfiles/images/topics/20200605_sokomongara_1.jpg"
    }
    {
        name: "Lionel Fischie",
        food: "Mollusks",
        species: "lionfish",
        length: 18,
        location: "Red Sea",
        image: "https://media.pri.org/s3fs-public/styles/story_main/public/story/images/3945251175_c94fbb3b51_o_crop.jpg?itok=LMWsPhVl"
    }   
]

export const useFish = () => {
    return fishCollection.slice()
}

import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}