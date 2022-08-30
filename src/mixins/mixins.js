export default {
    methods: {
        getImgUrl(img) {
            console.log(img);
            return require('../assets/countries/' + img);
        }
    },
    created() {
        console.log('Component lifecycle hook created() called');
    }
}