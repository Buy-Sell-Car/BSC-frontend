<template>
    <div>
        <ul>
            <AdvertItem 
                v-for="advert of adverts"
                v-bind:advert="advert"
            />
        </ul>
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
