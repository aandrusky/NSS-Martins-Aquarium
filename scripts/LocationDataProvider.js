const locationCollection = [
    {
        location: "Red Sea",
        coordinates: "15.728283, 39.853355",
        image: "https://www.whoi.edu/wp-content/uploads/2018/10/web_504193-1200x675.jpg"
    },
    {
        location: "Nova Scotia",
        coordinates: "44.575086, -63.964545",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Nova_Scotia_counties_2015.png/1200px-Nova_Scotia_counties_2015.png"
    },
    {
        location: "Indian Ocean",
        coordinates: "-17.478972, 63.595673",
        image: "https://besthotelshome.com/wp-content/uploads/2020/03/Political-Indian-Ocean-Map-1024x1024.jpg"
    }   
]

export const useLocation = () => {
    return locationCollection.slice()
}
