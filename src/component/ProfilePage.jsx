import * as React from 'react'
import getPriceHistory from '../API/priceHistory';
import getSymbolProfile from '../API/symbol';
import { HorizontalGridLines, XYPlot, XAxis, YAxis, LineSeries } from 'react-vis';
import { map } from 'lodash';

const ProfilePage = () => {

    const [profileTicker, setProfileTicker] = React.useState("");
    const [symbolHistoryTicker, setSymbolHistoryTicker] = React.useState("")
    const [symbolHistoryDays, setsymbolHistoryDays] = React.useState(30);
    const [symbolHistory, setSymbolHistory] = React.useState({})

    const handleProfileInputChange = (e) => {
        setProfileTicker(e.target.value);
    }

    const handleSymbolInputChange = (e) => {
        setSymbolHistoryTicker(e.target.value)
    }

    const handleDaysForPriceChange = (e) => {
        setsymbolHistoryDays(e.target.value);
    }

    const onProfileSubmit = async (e) => {
        e.preventDefault();
        const results = await getSymbolProfile(profileTicker);
        console.log(results)
    }

    const onSymbolHistorySubmit = async (e) => {
        e.preventDefault();
        const results = await getPriceHistory(symbolHistoryTicker, symbolHistoryDays);
        setSymbolHistory(results.data)
    }

    const data = symbolHistory && symbolHistory.quoteList ? map(symbolHistory.quoteList, quote => { return { x: quote.date, y: quote.price } }) : []
    console.log(data, symbolHistory)
    return (
        <>
            <h2>Profiles</h2>
            <div>
                <span>
                    <form onSubmit={onProfileSubmit}>
                        <label>
                            Symbol:
                            <input onChange={handleProfileInputChange}></input>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </span>

                <span>
                    <form onSubmit={onSymbolHistorySubmit}>
                        <label>
                            Symbol:
                            <input onChange={handleSymbolInputChange}></input>
                        </label>
                        <label>
                            days:
                            <select value={symbolHistoryDays} onChange={handleDaysForPriceChange}>
                                <option value={1}>1 Days</option>
                                <option value={5}>5 Days</option>
                                <option value={15}>15 Days</option>
                                <option value={30}>30 Days</option>
                                <option value={60}>60 Days</option>
                            </select>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    {symbolHistory &&
                        <XYPlot xType="ordinal" yDomain={[0,10]} height={500} width={750}>
                            <HorizontalGridLines />
                            <XAxis tickLabelAngle={90} />
                            <YAxis />
                            <LineSeries data={data} />

                        </XYPlot>
                    }
                </span>
            </div>
        </>
    )
}

export default ProfilePage