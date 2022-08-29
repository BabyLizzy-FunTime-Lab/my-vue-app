<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="container">
            <img src="@/assets/flags/aw.svg">
            <h1>{{header}}</h1>
            <ul class="list-group">
                <li class="list-group-item list-group-item-action country" data-bs-toggle="collapse" :data-bs-target="'#info-' + country.altSpellings[0]" aria-expanded="false" v-for="(country, index) in countries" :key="index"
                    :title="'The capital is: ' + country.capital" :id="country.altSpellings[0]">
                    {{index}} -
                    {{country.name}}
                    <div class="collapse" aria-expanded="false" :id="'info-' + country.altSpellings[0]">
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