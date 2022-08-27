<template>
    <div class="container-fluid">
        <div class="container">
            <img src="@/assets/flags/aw.svg">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item" data-bs-toggle="collapse" :data-bs-target="'#' + country.altSpellings[0]" aria-expanded="false" v-for="(country, index) in countries" :key="index"
                    :title="'The capital is: ' + country.capital">
                    {{index}} -
                    {{country.name}}
                    <div class="collapse" aria-expanded="false" :id="country.altSpellings[0]">
                        <img :src="flagLink(country.altSpellings[0])" :alt="'Flag of ' + country.name" class="img-thumbnail">
                        <!-- <img v-attr="src:flagLink(country.altSpellings[0])" :alt="'Flag of ' + country.name" class="img-thumbnail"> -->
                        <!-- <img v-attr="src: '@/assets/flags/' + country.altSpellings[0] + '.svg' " :alt="'Flag of ' + country.name" class="img-thumbnail"> -->

                        <ul class="list-group">
                            <li class="list-group-item">Capital: {{country.capital}}</li>
                            <li class="list-group-item">Region: {{country.region}}</li>
                            <li class="list-group-item">Sub-region: {{country.subregion}}</li>
                            <li class="list-group-item">Population: {{country.population}}</li>
                        </ul>
                    </div>
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
        },
        methods: {
            flagLink(flagletters) {
                let lowerflagletters = flagletters.toLowerCase();
                let link = '/src/assets/flags/' + lowerflagletters + '.svg';
                return link;
            }
        }
    }
</script>

<style scoped>
    
</style>