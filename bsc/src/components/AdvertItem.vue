<template>
    <li>
        <div>{{ advert.title }}</div>
        <div>Цена: {{ advert.price }} Рублей</div>
        <hr>
    </li>
</template>

<script>
export default {
    props: {
        advert: {
            type: Object,
            required: true
        }
    }
}
</script>