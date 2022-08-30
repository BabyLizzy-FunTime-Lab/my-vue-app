<template>
    <div class="container-fluid">
        <div class="container countries-container">
            <!-- <img src="@/assets/flags/aw.svg"> -->
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item list-group-item-action country" data-bs-toggle="collapse" :data-bs-target="'#info-' + country.altSpellings[0]" aria-expanded="false" v-for="(country, index) in countries" :key="index"
                    :title="'The capital is: ' + country.capital" :id="country.altSpellings[0]">
                    {{index}} -
                    {{country.name}}
                    <div class="collapse" aria-expanded="false" :id="'info-' + country.altSpellings[0]">
                        <img :src="flagLink(country.altSpellings[0])" :alt="'Flag of ' + country.name" class="img-thumbnail mx-auto d-block flag-thumbnail">
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
                // let flags = require.context('@/assets/flags/');
                let lowerflagletters = flagletters.toLowerCase();
                // let link = './' + lowerflagletters + '.svg';
                // return flags(link);
                return require('@/assets/flags/' + lowerflagletters + '.svg');
            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    .countries-container {
        max-width: 40em;
    }
    .flag-thumbnail {
        width: 20em;
        margin: .5em 0 .5em 0;
    }
</style>