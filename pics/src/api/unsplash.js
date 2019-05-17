import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ee26e696851b5f5ae1460b7717a3a6829bdb4b8d4c4b45ebf9b0c3fa4af83a17'
    }
});
