<script lang="ts">
  import octopus from "$lib/assets/Designer.png";

  let isOpen: boolean = false;

  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";

  // import { AlignJustify } from 'lucide-svelte';

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<main class="desktop">
  <nav>
    <a href="/" class="logo">
      <img src={octopus} width="50" alt="" />
    </a>
    <section>
      <a href="/"> Home </a>
      <a href="/about"> About Us </a>
      <a href="/contact"> Contact Us </a>
      <a href="/join"> Join Us </a>
    </section>
  </nav>
</main>

<main class="mobile">
  <nav>
    <a href="/" class="logo">
      <img src={octopus} width="50" alt="" />
    </a>

    <button on:click={() => toggleSidebar()}>
      <Icon icon="charm:menu-hamburger" color="#d5e0fc" width="20" />
    </button>
  </nav>

  {#if isOpen}
    <div
      class="side-bar"
      in:slide={{ axis: "x", duration: 400 }}
      out:slide={{ axis: "x", duration: 400 }}
    >
      <br />
      <button class="nav-element-sidebar" on:click={() => toggleSidebar()}
        ><Icon icon="akar-icons:cross" color="#d5e0fc" width="20" />
      </button>

      <br />
      <a on:click={() => toggleSidebar()} href="/"> Home </a>
      <br />
      <a on:click={() => toggleSidebar()} href="/about"> About Us </a>
      <br />
      <a on:click={() => toggleSidebar()} href="/contact"> Contact Us </a>
      <br />
      <a on:click={() => toggleSidebar()} href="/join"> Join Us </a>
    </div>
  {/if}
</main>

<style>
  .desktop > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    background: linear-gradient(rgba(26, 14, 155, 0.5), rgba(83, 29, 235, 0.5));
    border-radius: 10px;
    padding: 1rem;
  }

  button {
    background: transparent;
    border: none;
  }
  .logo {
    background-color: none;
    border-bottom: none;
  }
  .logo:hover {
    background-color: transparent;
    border-bottom: none;
  }

  .mobile {
    display: none;
  }

  .side-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100vh; /* Equivalent to h-screen in Tailwind CSS */
    background: linear-gradient(rgba(26, 14, 155, 0.5), rgba(83, 29, 235, 0.5));
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }

  .desktop {
    top: 0;
    position: fixed;
    width: 95%;
    padding: 2rem;
    z-index: 9999;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    transition: 0.3s ease;
    margin: 0 2rem;
    min-width: max-content;
    text-align: center;
    border-bottom: 2px solid transparent;
    transition: ease-in 0.2s;
  }

  a:hover {
    border-bottom: 2px solid var(--text-color);
    transition: ease-in 0.2s;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }

    .mobile {
      top: 0;
      position: fixed;
      z-index: 9999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0;
    }

    .mobile > nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(10px);
      background: linear-gradient(
        rgba(26, 14, 155, 0.5),
        rgba(83, 29, 235, 0.5)
      );
      border-radius: 10px;
      width: 90%;
      margin: 0;
      padding: 1rem;
    }
  }
</style>
