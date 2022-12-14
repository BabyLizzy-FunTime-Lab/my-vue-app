<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <h1>{{header}}</h1>
                <div class="col-sm">
                    <h2>Destinations:</h2>
                    <div class="jumbotron">
                        <h1 class="display-4">{{ selectedCountry.name }}</h1>
                        <h2>
                            Capital: {{ selectedCountry.capital }}
                        </h2>
                    </div>
                    <div class="buttons-container d-flex flex-row justify-content-around align-items-center">
                        <button type="button" class="btn btn-primary p-2" @click="btnBackIndex()">Back</button>
                        <button type="button" class="btn btn-primary p-2" @click="btnForwardIndex()">Forward</button>
                        <button type="button" class="btn btn-primary p-2" @click="toggleCountryDetails()">Hide details</button>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(country, index) in countryData.countries" v-bind:key="country.id"
                            v-bind:title="country.details" @click="selectCountry(index)">
                            {{country.id}} -
                            {{country.name}}
                            <span class="badge bg-secondary rounded-pill float-end" v-show="country.rating !== 0">
                                {{country.rating}}
                            </span>
                        </li>
                    </ul>
                </div>
                <CollapsibleSection class="col-sm">
                    <CountryDetail v-if="selectedCountry" 
                        @rating="onRating($event)"
                        :country="selectedCountry" 
                        :showDetails="showCountryDetails"
                        :message-type="'info'"/>
                        <!-- CountryDetail verwacht een string met de text "info" in de messageType prop-->
                </CollapsibleSection>
            </div>    
        </div>
        <div class="container v-model">
            <div class="container">
                <h2>Other countries:</h2>
                <div class="input-group mb-3">
                    <input v-model="newCountry" @keyup.enter="addCountry(newCountry)"
                        type="text" class="form-control" placeholder="New country" aria-label="New country" aria-describedby="button-addon2"/>
                    <button @click="addCountry(newCountry)" class="btn btn-outline-primary" type="button" id="button-addon2">Add country</button>  
                </div>
            </div>
            <div class="container">
                <h4>The new country is, {{ newCountry }}</h4>
                <TransitionGroup class="list-group" name="list" tag="ul">
                        <li class="list-group-item d-flex justify-content-between align-items-center"
                            v-for="(country, index) in newCountries" :key="index">
                            {{ country }}
                            <button @click="deleteNewCountry(country)" class="btn btn-danger">Delete</button>
                        </li>
                </TransitionGroup>
            </div>
        </div>
        <div class="container costs">
            <h2>Destinations cheaper than: </h2>
            <select class="form-control-lg"
                v-model="selectedCost"
                @change="filterCountries()">
                <option v-for="(cost, index) in costs" :key="index" :value="cost">
                    {{ cost }}
                </option>
            </select>
            <ul class="list-group">
                <li v-for="(country, index) in filteredCountries" :key="index" class="list-group-item">
                    {{ country.name }} (Euro: {{ country.cost }})
                </li>
            </ul>
        </div>
        <div class="container teller">
            <h3>Teller: {{counter}}</h3>
            <button @click="increment()" class="btn btn-success">+</button>
            <button @click="decrement()" class="btn btn-danger">-</button>
            <!-- <button v-on:click="counter++" class="btn btn-success">+</button> -->
            <!-- <button v-on:click="counter--" class="btn btn-danger">-</button> -->
        </div>
        <div class="container numbers">
            <h3>Numbers</h3>
            <select class="form-select">
                <option selected>Choose a number</option>
                <option v-for="(number, index) in numbersArray" :key="index" :value="number">{{number}}</option>
            </select>
            <p>{{mixintext}}</p>
        </div>
        <TheWorld/>
    </div>
</template>

<script>
    import TheWorld from './TheWorld.vue';
    import CountryDetail from './CountryDetail.vue';
    import CollapsibleSection from './CollapsibleSection.vue';
    import countryData from '@/data/countryData';
    import mixins from '@/mixins/mixins';

    export default {
        name: 'VacationPicker',
        mixins: [mixins],
        components: {
            TheWorld,
            CountryDetail,
            CollapsibleSection
        },
        data: function() {
            return {
                countryData: countryData,
                header: 'Vue Vacation Picker',
                numbersArray: [10,20,30,40,50],
                counter: 0,
                selectedCountryIndex: 0,
                newCountry: 'Wakanda',
                newCountries: [],
                selectedCost: 1000,
                costs: [1000, 2000, 3000, 4000, 5000, 6000],
                filteredCountries: [],
                showCountryDetails: true
            }
        },
        methods: {
            increment() {
                this.counter++;
            },
            decrement() {
                this.counter--;
            },
            selectCountry(index) {
                this.selectedCountryIndex = index;
            },
            addCountry() {
                this.newCountries.push(this.newCountry);
                this.newCountry = '';
            },
            filterCountries() {
                this.filteredCountries = this.countryData.countries.filter(country => country.cost < this.selectedCost)
            },
            btnBackIndex() {
                this.selectedCountryIndex--;
            },
            btnForwardIndex() {
                this.selectedCountryIndex++;
            },
            toggleCountryDetails() {
                if(this.showCountryDetails) {
                    this.showCountryDetails = false;
                } else {
                    this.showCountryDetails = true;
                }
            },
            deleteNewCountry(country) {
                let index = this.newCountries.indexOf(country);
                if (index > -1) {
                    this.newCountries.splice(index, 1);
                }
            },
            onRating(rating) {
                if (this.countryData.countries[this.selectedCountryIndex].rating) {
                    this.countryData.countries[this.selectedCountryIndex].rating += rating;
                } else {
                    this.countryData.countries[this.selectedCountryIndex].rating = rating;
                }
            } 
        },
        computed: {
            selectedCountry() {
                console.log('selectedCountry aangeroepen');
                return {
                    // id: this.countryData.countries[this.selectedCountryIndex].id,
                    // name: this.countryData.countries[this.selectedCountryIndex].name,
                    // capital: this.countryData.countries[this.selectedCountryIndex].capital,
                    // cost: this.countryData.countries[this.selectedCountryIndex].cost,
                    // details: this.countryData.countries[this.selectedCountryIndex].details,
                    // img: this.countryData.countries[this.selectedCountryIndex].img
                    // spread operator
                    ...this.countryData.countries[this.selectedCountryIndex]                    
                }
            }
        }
    }
</script>

<style scoped>
    .jumbotron {
        background-color: gainsboro;
        text-align: center;
    }
    .buttons-container {
        margin: .5em 0 .5em 0;
    }
    .buttons-container button {
        width: 7em;
        height: 4em;
        margin: .2em;
    }
    .teller, .numbers {
        text-align: center;
        padding: 1.5em 0em 1.5em 0em;
    }
    .v-model {
        padding: 1.5em 0em 1.5em 0em;
    }
    /* .v-model button {
        margin: 0 1em 0 1em;
    } */
    select {
        max-width: 15em;
        margin: auto;
    }
    /* This is the vue animation of other countries */
    .list-enter-active, .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from, .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

</style>