const tipsCollection = [
    {
        Fish: "Lionfish",
        Salinity: "Salty",
        Temperature: "80°-85°"
    },
    {
        Fish:  "Clownfish",
        Salinity: "Salty",
        Temperature: "80°-85°"
    },
    {
        Fish:  "Triggerfish ",
        Salinity: "Salty",
        Temperature: "55°-80°"
    }
]

export const useTip = () => {
    return tipsCollection.slice()
}
