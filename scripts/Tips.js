export const Tip = (tipObj) => {
    return `
    <section class="fishListTips">
        <h4 class="fishTipsTitles">${tipObj.Fish} Tips:</h4>
            <div class="fishTips">
                <h3>Water:</h3>
                <ul>
                    <h5>Salinity:</h5>
                        <ul>
                            <li>${tipObj.Salinity}</li>
                        </ul>
                    </li>
                <h5>Temperature</h5>
                        <ul>
                            <li>${tipObj.Temperature}</li>
                        </ul>
                </ul>
            </div>
    </section>
`
}