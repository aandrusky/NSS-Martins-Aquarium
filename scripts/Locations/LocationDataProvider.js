

const locationCollection = [
    {
        location: "Red Sea",
        coordinates: "15.728283, 39.853355",
        image: "https://cdn.powered-by-nitrosell.com/product_images/11/2575/large-common%20clown.jpg"
    },
    {
        location: "Nova Scotia",
        coordinates: "44.575086, -63.964545",
        image: "https://churaumi.okinawa/userfiles/images/topics/20200605_sokomongara_1.jpg"
    },
    {
        location: "Indian Ocean",
        coordinates: "-17.478972, 63.595673",
        image: "https://media.pri.org/s3fs-public/styles/story_main/public/story/images/3945251175_c94fbb3b51_o_crop.jpg?itok=LMWsPhVl"
    }   
]

export const useLocation = () => {
    return locationCollection.slice()
}

