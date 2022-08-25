<template>
    <div class="container-fluid">
        <div class="container">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="(country, index) in countries" :key="index"
                    :title="'The capital is: ' + country.capital">
                    {{index}} -
                    {{country.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import countryInfo from '@/data/countries.json';
    export default {
        name: 'TheWorld',
        data: function() {
            return {
                countries: countryInfo,
                header: 'The World'
            }
        }
    }
</script>

<style scoped>
    
</style>