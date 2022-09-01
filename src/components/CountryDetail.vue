<template>
    <div class="col-sm">
        <h2>Selected: {{country.name}}</h2>
        <ul class="list-group">
            <li class="list-group-item">{{ country.id }}</li>
            <li class="list-group-item">{{ country.name }}</li>
            <li class="list-group-item">{{ country.capital }}</li>
            <li class="list-group-item" 
                v-if="showDetails">{{ country.details }}</li>
            <li class="list-group-item" v-if="isExpensive">
                <span class="badge bg-danger rounded-pill">Expensive!</span>
            </li>
            <li class="list-group-item" v-if="isOnSale">
                <span class="badge bg-success rounded-pill">Sale!!</span>
            </li>
            <li class="list-group-item">
                <img :src="getImgUrl(country.img)" :alt="country.img" 
                class="img-fluid mx-auto d-block">
            </li>
        </ul>
    </div>
</template>

<script>
    import mixins from '@/mixins/mixins';

    export default {
        name: 'CountryDetail',
        // props: ['country', 'showDetails'],
        props: {
            country: {
                type: Object,
                required: true
            },
            showDetails: {
                type: Boolean,
                required: true
            }
            // number: {
            //     type: Number,
            //     required: false,
            //     default: 100
            // }
        },
        mixins: [mixins],
        computed: {
            isExpensive() {
                return this.country.cost > 4000;
            },
            isOnSale() {
                return this.country.cost < 4000;
            }
        }
    }
</script>

<style scoped>

</style>