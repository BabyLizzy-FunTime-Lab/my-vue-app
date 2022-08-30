<template>
    <div class="container-fluid">
        <div class="container">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="(country, index) in countryData.countries" v-bind:key="country.id"
                    v-bind:title="country.details" @click="selectCountry(index)">
                    {{index}} -
                    {{country.name}}
                </li>
            </ul>
            <h2>Selected:</h2>
            <ul class="list-group">
                <li class="list-group-item">{{ selectedCountry.id }}</li>
                <li class="list-group-item">{{ selectedCountry.name }}</li>
                <li class="list-group-item">{{ selectedCountry.capital }}</li>
                <li class="list-group-item">{{ selectedCountry.details }}</li>
                <li class="list-group-item" v-if="isExpensive">
                    <span class="badge bg-danger rounded-pill">Expensive!</span>
                </li>
                <li class="list-group-item">
                    <img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid mx-auto d-block">
                </li>
            </ul>
        </div>
        <div class="container v-model">
            <h2>Other countries:</h2>
            <input type="text" 
                v-model="newCountry"
                @keyup.enter="addCountry(newCountry)"
                class="form-control-lg" placeholder="New country..."/>
            <button @click="addCountry(newCountry)" class="btn btn-info">Add country</button>
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="(country, index) in newCountries" :key="index">
                    {{ country }}
                </li>
            </ul>
            <h3>New country is, {{ newCountry }}</h3>
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
        </div>
        <TheWorld/>
    </div>
</template>

<script>
    import TheWorld from './TheWorld.vue';
    import countryData from '@/data/countryData';
    import mixins from '@/mixins/mixins';

    export default {
        name: 'VacationPicker',
        mixins: [mixins],
        components: {
            TheWorld
        },
        data: function() {
            return {
                countryData: countryData,
                header: 'Vue Vacation Picker',
                numbersArray: [10,20,30,40,50],
                counter: 0,
                selectedCountryIndex: 0,
                newCountry: 'Wakanda',
                newCountries: []
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
            },
            isExpensive() {
                return this.countryData.countries[this.selectedCountryIndex].cost > 4000;
            }
        }
    }
</script>

<style scoped>
    .teller, .numbers, .v-model{
        text-align: center;
        padding: 1em 0em 1em 0em;
    }
    select {
        max-width: 15em;
        margin: auto;
    }
</style>