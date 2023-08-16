<script>
    import "../app.css"
    import Navbar from "./components/Navbar.svelte"
</script>

<div>
    <main>
        <Navbar />
        <!-- Page content -->
        <slot></slot>
    </main>
</div>

<slot />