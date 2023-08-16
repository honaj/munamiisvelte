<script lang="ts">
    export let image_url: string
    export let product_name: string
    export let product_price: string
</script>

<div class="flex flex-col items-center bg-munamiilightgreen border-gray-200 p-4 rounded-md drop-shadow-xl">
    <div class="w-60 h-60">
        <img class="object-cover h-full w-full rounded-md" src="{image_url}" alt="{product_name}">
    </div>
    <h2 class="font-bold text-lg mb-2">{product_name}</h2>
    <p class="text-gray-500">{product_price}</p>
</div>