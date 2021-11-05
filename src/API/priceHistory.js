import axios from 'axios';

const getPriceHistory = async (ticker, days) => {
    return await axios.get(`http://localhost:8082/price-history/${ticker}?days=${days}`)
}

export default getPriceHistory