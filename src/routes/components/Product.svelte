<script lang="ts">
    export let image_url: string
    export let product_name: string
    export let product_price: string
</script>

<div class="flex flex-col items-center bg-white rounded-md shadow-xl">
    <div class="w-80 h-80">
        <img class="h-full w-full rounded-md" src="{image_url}" alt="{product_name}">
    </div>
    <div class="content-center text-center w-full">
        <h2 class="font-bold text-lg mb-2 p-2 font-JosefinSans">{product_name}</h2>
        <p class="p-2 font-JosefinSans">{product_price}</p>
    </div>
</div>