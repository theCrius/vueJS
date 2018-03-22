<template>
<div>
  <h1>{{title}}</h1>
  <p>FontAwesome Icon: <font-awesome-icon icon="home" /> </p>
  <p>Weather Icon: <weather-icon icon="wind" wind="towards-180" /></p>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free-solid';
import WeatherIcon from './WeatherIcons';

export default {
  name: "home",
  data: () => ({
    title: 'Home Title'
  }),
  components: {
    FontAwesomeIcon,
    WeatherIcon
  }
};
</script>

<style scoped lang="scss">

</style>
