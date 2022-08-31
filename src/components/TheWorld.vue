<template>
    <div class="container-fluid">
        <div class="container countries-container">
            <h1>{{header}}</h1>
            <p>{{mixintext}}</p>
            <input type="text" v-model="mixintext">
            <div class="row">
                <div class="col-sm countries-section">
                    <h2>Country Information:</h2>
                    <img :src="flagLink(selectedCountry.altSpellings[0])" :alt="'Flag of ' + selectedCountry.name" 
                    class="img-thumbnail mx-auto d-block flag-thumbnail">
                    <ul class="list-group">
                        <li class="list-group-item">Name: {{ selectedCountry.name }}</li>
                        <li class="list-group-item">Capital: {{ selectedCountry.capital }}</li>
                        <li class="list-group-item">Region: {{ selectedCountry.region }}</li>
                        <li class="list-group-item">Subregion: {{ selectedCountry.subregion }}</li>
                        <li class="list-group-item">Population: {{ selectedCountry.population }}</li>
                        <li class="list-group-item">Area: {{ selectedCountry.area }}</li>
                        <li class="list-group-item">NativeName: {{ selectedCountry.nativeName }}</li>
                        <li class="list-group-item">Alpha2Code: {{ selectedCountry.alpha2Code }}</li>
                        <li class="list-group-item">Alpha3Code: {{ selectedCountry.alpha3Code }}</li>
                        <li class="list-group-item" v-if="isSmallCountry">
                            <span class="badge bg-danger rounded-pill">Small Country</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm countries-section" >
                    <h2>Country List:</h2>
                    <ul class="list-group countries-info">
                        <li class="list-group-item list-group-item-action country" @click="selectCountry(index)" data-bs-toggle="collapse" 
                            :data-bs-target="'#info-' + country.altSpellings[0]" aria-expanded="false" 
                            v-for="(country, index) in countries" :key="index"
                            :title="'The capital is: ' + country.capital" :id="country.altSpellings[0]">
                            {{index}} -
                            {{country.name}}
                            <div class="collapse" aria-expanded="false" :id="'info-' + country.altSpellings[0]">
                                <ul class="list-group">
                                    <li class="list-group-item">Capital: {{country.capital}}</li>
                                    <li class="list-group-item">Region: {{country.region}}</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import countryInfo from '@/data/countries.json';
    import mixins from '@/mixins/mixins';
    
    export default {
        name: 'TheWorld',
        mixins: [mixins],
        data: function() {
            return {
                header: 'The World',
                countries: countryInfo,
                selectedCountryIndex: 11
            }
        },
        created() {
            console.log("The World component created");
        },
        methods: {
            flagLink(flagletters) {
                // let flags = require.context('@/assets/flags/');
                let lowerflagletters = flagletters.toLowerCase();
                // let link = './' + lowerflagletters + '.svg';
                // return flags(link);
                return require('@/assets/flags/' + lowerflagletters + '.svg');
            },
            selectCountry(index) {
                this.selectedCountryIndex = index;
            }
        },
        computed: {
            selectedCountry() {
                let countryObject = {
                    ...this.countries[this.selectedCountryIndex]
                };
                return countryObject;
            },
            isSmallCountry() {
                return this.countries[this.selectedCountryIndex].population < 500000
            }
        }
    }
</script>

<style scoped>
    .countries-container {
        max-width: 40em;
        margin: 1em auto 6em auto;
    }
    .countries-section {
        margin-top: 1em;
    }
    .countries-info {
        max-height: 38em;
        overflow-y: scroll;
    }
    .flag-thumbnail {
        width: 20em;
        margin: .5em 0 .5em 0;
    }
</style>