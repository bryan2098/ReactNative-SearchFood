import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VZ4qK-eAaQNXBh155ELUqcoDIf5ksgsGeTJUtobutEX0tCgx1_7_9bKcB4RwaeotrBDvy5amh24b1541poWzvcXcR7CDiagk074pjjL7mE2aF1VEGlHPSrAUKfAsX3Yx'
    }
});