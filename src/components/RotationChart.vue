<template>
<!--  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
      </template>

      <q-carousel-slide img-src="https://tu.sunning.fit/i/2022/06/15/62a8ce362fb2b.jpg" name="style" class="column no-wrap flex-center">
&lt;!&ndash;        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>&ndash;&gt;
      </q-carousel-slide>
      <q-carousel-slide img-src="https://tu.sunning.fit/i/2022/06/15/62a8ce362fb2b.jpg" name="tv" class="column no-wrap flex-center">
&lt;!&ndash;        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>&ndash;&gt;
      </q-carousel-slide>
      <q-carousel-slide img-src="https://tu.sunning.fit/i/2022/06/15/62a8ce362fb2b.jpg" name="layers" class="column no-wrap flex-center">
&lt;!&ndash;        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>&ndash;&gt;
      </q-carousel-slide>
      <q-carousel-slide img-src="https://tu.sunning.fit/i/2022/06/15/62a8ce362fb2b.jpg" name="map" class="column no-wrap flex-center">
&lt;!&ndash;        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>&ndash;&gt;
      </q-carousel-slide>
    </q-carousel>


  </div>-->

  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script>
import {ref} from 'vue';


export default {
  name: 'RotationChart',
  setup () {
    return {
      slide: ref(1),
    }
  }
}
</script>

<style scoped>

</style>
