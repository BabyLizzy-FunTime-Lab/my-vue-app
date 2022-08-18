<template>
    <div>
        <picture>
            <img src="@/assets/color_girl.jpg" alt="Image of a colorful woman">
        </picture>
    </div>
</template>
<script>
    export default {
        name: 'DecorImage'
    }
</script>
<style scoped>
    div {
        display: flex;
        align-items: center;
    }
    img {
        width: 20em;
        height: auto;
    }
    picture {
        margin: 1em 0em 3em 0em;
        /* width: fit-content; */
        /* height: fit-content; */
    }
</style>


