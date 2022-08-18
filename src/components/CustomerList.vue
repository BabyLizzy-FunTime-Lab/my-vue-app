<template>
    <div>
        <h2>Our most valued customers</h2>
        <ul>
            <li>Microsoft</li>
            <li>Google</li>
            <li>Facebook</li>
            <li>Twitter</li>
        </ul>
    </div>
    <DecorImage imgcaption="Colors & Love"/> 
</template>
<script>
import DecorImage from '@/components/DecorImage.vue';
    export default {
        name: 'CustomerList',
        components: {DecorImage}
    }
</script>
<style scoped>
div {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: justify;
}
h2 {
    text-align: center;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}
li {
    width: 5em;
}
</style>