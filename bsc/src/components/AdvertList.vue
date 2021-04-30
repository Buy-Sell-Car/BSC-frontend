<template>
    <div class="col-10 m-auto">
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
