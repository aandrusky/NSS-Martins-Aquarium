

//***Fish functions***
import { fishList } from './FishList.js'
import { useFish } from './FishDataProvider.js'

fishList()

//***Location functions***
import { useLocation} from './LocationDataProvider.js'
import { locationList } from './LocationList.js'

const allTheLocations = useLocation()

for (const location of allTheLocations) {
}

locationList()




