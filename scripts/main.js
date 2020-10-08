

//***Fish functions***
import { fishList } from './FishList.js'
import { useFish } from './FishDataProvider.js'

fishList()

//***Location functions***
import { useLocation} from './LocationDataProvider.js'

const allTheLocations = useLocation()

for (const location of allTheLocations) {
    console.log(location)
}




