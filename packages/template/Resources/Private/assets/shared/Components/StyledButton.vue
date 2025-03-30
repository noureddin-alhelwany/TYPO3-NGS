<script setup>

import Loading from './Loading.vue';
const props = defineProps({ loading: Boolean, variant: String, color: String, inverse: Boolean });

let firstColor = props.inverse ? `on-${props.color}` : props.color;
let secondColor = !props.inverse ? `on-${props.color}` : props.color;


let colorClasses;

if (props.variant == 'outlined')
    colorClasses = `border-2 border-${firstColor} text-${firstColor}`

else if (props.variant == 'filled')
    colorClasses = `bg-${firstColor} text-${secondColor}`

else if (props.variant == 'text')
    colorClasses = `text-${firstColor}`


</script>

<template>
    <button
        :class="`rounded-md px-4 py-2 text-sm uppercase tracking-widest transition duration-150 ease-in-out font-extrabold ${colorClasses}`">
        <Loading :loading="loading">
            <slot />
        </Loading>
    </button>
</template>