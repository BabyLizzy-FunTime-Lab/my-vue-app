<template>
    <div class="col-sm">
        <h2>Selected: {{country.name}}</h2>
        <ul class="list-group">
            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                {{ country.id }}
                <span class="float-right">
                    <button @click="setRating(1)" class="... btn btn-success">+1</button>
                    <button @click="setRating(-1)" class="... btn btn-danger">-1</button>
                </span>
            </li>
            <li class="list-group-item">{{ country.name }}</li>
            <li class="list-group-item">{{ country.capital }}</li>
            <li class="list-group-item">
                <img :src="getImgUrl(country.img)" :alt="country.img" 
                class="img-fluid mx-auto d-block">
            </li>
            <li class="list-group-item" 
                v-if="showDetails">{{ country.details }}</li>
            <li class="list-group-item" v-if="isExpensive">
                <span class="badge bg-danger rounded-pill">Expensive!</span>
            </li>
            <li class="list-group-item" v-if="isOnSale">
                <span class="badge bg-success rounded-pill">Sale!!</span>
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
            },
            messageType: {
                type: String,
                required: true,
                validator: (value) => {
                    return ['warning', 'success', 'info'].indexOf(value) !== -1;
                }
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
        },
        methods: {
            setRating(value) {
                // Send rating to parent "vacationpicker"
                this.$emit('rating', value);
            }
        },
        emits: ['rating'],
    }
</script>

<style scoped>

</style>