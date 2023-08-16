<!-- ProductGrid.svelte -->
<script lang="ts">
    import Product from "../components/Product.svelte"
    let products = [
        {image_url: 'url1', product_name: 'name1', product_price: 'price1'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2'},
        //...add the remaining 6 products here
    ]
</script>

<div class="flex justify-center items-center">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each products as product}
            <Product image_url={product.image_url} product_name={product.product_name} product_price={product.product_price}/>
        {/each}
    </div>
</div>