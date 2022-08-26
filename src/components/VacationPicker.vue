<template>
    <div class="container-fluid">
        <div class="container">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="(country, index) in countryData.countries" v-bind:key="country.id"
                    v-bind:title="country.details" @click="selected(country.name)">
                    {{index}} -
                    {{country.name}}
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
        </div>
        <TheWorld/>
    </div>
</template>

<script>
    import TheWorld from './TheWorld.vue';
    import countryData from '@/data/countryData';
    export default {
        name: 'VacationPicker',
        components: {
            TheWorld
        },
        data: function() {
            return {
                countryData: countryData,
                header: 'Vue Vacation Picker',
                numbersArray: [10,20,30,40,50],
                counter: 0
            }
        },
        methods: {
            increment() {
                this.counter++;
            },
            decrement() {
                this.counter--;
            },
            selected(selectedcountry) {
                alert("You selected: " + selectedcountry);
            }
        }
    }
</script>

<style scoped>
    .teller, .numbers{
        text-align: center;
        padding: 1em 0em 1em 0em;
    }
    select {
        max-width: 15em;
        margin: auto;
    }
</style>