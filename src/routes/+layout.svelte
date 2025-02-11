<!-- src/routes/+layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import '$lib/styles/global.css';
</script>

<div class="page-container">
    <div class="flex-main-container">
        <Header />

        <slot /> <!-- This renders the current page -->

        <Footer />
    </div>
</div>