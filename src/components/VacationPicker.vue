<template>
    <div class="container">
        <h1>Pick your next vacation.</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="country in countryData.countries" v-bind:key="country.id">
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
                countryData: countryData
            }
        }
    }
</script>

<style>

</style>