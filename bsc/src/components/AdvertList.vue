<template>
    <div class="col-lg-10 col-12 m-auto">
            <AdvertItem 
                v-for="advert of adverts"
                v-bind:advert="advert"
                :key="advert.id"
            />
    </div>
</template>

<script>
import AdvertItem from '@/components/AdvertItem'

export default {
    props: ['adverts'],
    components: {
        AdvertItem
    }
}
</script>
