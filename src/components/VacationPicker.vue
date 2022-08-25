<template>
    <div class="container-fluid">
        <div class="container">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="(country, index) in countryData.countries" v-bind:key="country.id"
                    v-bind:title="country.details">
                    {{index}} -
                    {{country.name}}
                </li>
            </ul>
        </div>
        <div class="container teller">
            <h3>Teller: {{counter}}</h3>
            <button v-on:click="counter++" class="btn btn-success">+</button>
            <button v-on:click="counter--" class="btn btn-danger">-</button>
        </div>
        
        
    </div>
</template>

<script>
    import countryData from '@/data/countryData';
    export default {
        name: 'VacationPicker',
        data: function() {
            return {
                countryData: countryData,
                header: 'Vue Vacation Picker',
                counter: 0
            }
        }
    }
</script>

<style scoped>
    .teller {
        text-align: center;
        padding: 1em 0em 1em 0em;
    }
</style>