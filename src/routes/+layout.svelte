<script>
  import Footer from "$lib/components/Footer.svelte";
import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<slot />

<Footer/>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  :global(body) {
    padding: 0;
    margin: 0;
    font-family: "Poppins";
  }

  :root {
    --background-color: #02071a;
    --text-color: #d5e0fc;
    --primary-color: #85a8f4;
    --accent-color: #531deb;
    --secondary-color: #1a0e9b;
  }

  :global(h1) {
    font-size: 5rem;
    color: var(--text-color);
    margin: 0;
    line-height: 5rem;
  }

  :global(h2) {
    font-size: 2rem;
    color: var(--text-color);
    margin: 0;
    line-height: 5rem;
  }

  :global(p) {
    font-size: 2rem;
    font-weight: 200;
    color: var(--text-color);
    margin: 0;
  }

</style>
