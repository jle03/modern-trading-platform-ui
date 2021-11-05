import axios from 'axios';

const getSymbolProfile = async (ticker) => {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
    return await axios.get(
        `http://localhost:8082/symbol-profile/${ticker}`, config
    )
}

export default getSymbolProfile