

//***Fish functions***
import { fishList } from './Fish/FishList.js'
import { useFish } from './Fish/FishDataProvider.js'

fishList()

//***Location functions***
import { useLocation} from '/LocationDataProvider.js'

const allTheLocations = useLocation()

for (const location of allTheLocations) {
    console.log(location)
}




