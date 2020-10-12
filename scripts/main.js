

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

//***Tip functions***

import { useTip } from './TipDataProvider.js'
import { TipList } from './TipsList.js'

const allTheTips = useTip()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList()

