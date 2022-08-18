<template>
    <div>
        <picture>
            <img src="@/assets/color_girl.jpg" alt="Image of a colorful woman">
            <figcaption>{{ imgcaption }}</figcaption>
        </picture>
    </div>
</template>
<script>
    export default {
        name: 'DecorImage',
        props: {
            imgcaption: String
        }
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
    figcaption {
        text-align: center;
    }
    picture {
        margin: 1em 0em 3em 0em;
    }
</style>


