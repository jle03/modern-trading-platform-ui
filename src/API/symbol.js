import axios from 'axios';

const getCompanyProfile = async (stockSymbol) => {
    return await axios.get(`http://localhost:8080/company-profile/${stockSymbol}`)
}

export default getCompanyProfile