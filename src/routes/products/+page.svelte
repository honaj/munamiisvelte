<!-- ProductGrid.svelte -->
<script lang="ts">
    import Product from "../components/Product.svelte";

    let products = [
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url1', product_name: 'name1', product_price: 'price1', product_category: 'cupcake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
        {image_url: 'url2', product_name: 'name2', product_price: 'price2', product_category: 'wedding cake'},
    ];

    let cupcakes = products.filter(product => product.product_category === 'cupcake');
    let weddingCakes = products.filter(product => product.product_category === 'wedding cake');
</script>

<div class="flex flex-col justify-center items-center">
    <div class="title">Cupcakes</div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each cupcakes as product}
            <Product image_url={product.image_url} product_name={product.product_name} product_price={product.product_price}/>
        {/each}
    </div>

    <div class="title">Wedding Cakes</div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each weddingCakes as product}
            <Product image_url={product.image_url} product_name={product.product_name} product_price={product.product_price}/>
        {/each}
    </div>
</div>