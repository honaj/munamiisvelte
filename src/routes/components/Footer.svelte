<script lang="ts">
    import { writable, derived } from 'svelte/store';
    import { onMount } from "svelte";
    import '@fortawesome/fontawesome-free/css/all.css';

    let fbIconLoaded: boolean = false;
    let igIconLoaded: boolean = false;
    let emailIconLoaded: boolean = false;

    onMount(() => {
        fbIconLoaded = true;
        igIconLoaded = true;
        emailIconLoaded = true;
    });

    const email = writable("info@mydomain.com");
    const obfuscatedEmail = derived(email, ($email: string) => $email.split("").reverse().join(""));
</script>

<footer class="bg-gray-800 text-munamiidarkgreen p-6">
    <div class="container mx-auto flex flex-col items-center justify-between">
        <div>
            <a href="https://facebook.com" target="_blank" class="mx-3">
                {#if fbIconLoaded}<i class="fab fa-facebook-f fa-3x"></i>{/if}
            </a>
            <a href="https://instagram.com" target="_blank" class="mx-3">
                {#if igIconLoaded}<i class="fab fa-instagram fa-3x"></i>{/if}
            </a>
            <a href="mailto:{$obfuscatedEmail}@mail.com" class="mx-3">
                {#if emailIconLoaded}<i class="fas fa-envelope fa-3x"></i>{/if}
            </a>
        </div>
    </div>
</footer>