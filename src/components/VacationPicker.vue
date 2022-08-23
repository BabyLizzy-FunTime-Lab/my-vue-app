<template>
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
</template>

<script>
    import countryData from '@/data/countryData';
    export default {
        name: 'VacationPicker',
        data: function() {
            return {
                countryData: countryData,
                header: 'Vue Vacation Picker'
            }
        }
    }
</script>

<style>

</style>