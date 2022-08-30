export default {
    methods: {
        getImgUrl(img) {
            console.log(img);
            return require('../assets/countries/' + img);
        }
    }
}