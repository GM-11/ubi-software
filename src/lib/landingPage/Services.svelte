<script lang="ts">
  import logo from "$lib/assets/Designer.png";
  import Service from "$lib/components/Service.svelte";
  import { services } from "$lib/helpers/services";
</script>

<main class="desktop">
  <h1>Range of services to fit all your needs</h1>

  <div class="container">
    <img src={logo} width="500" alt="Designer logo" />

    {#each services as service}
      <Service
        top={service.top}
        left={service.left}
        title={service.title}
        content={service.content}
      />
    {/each}
  </div>
</main>

<main class="mobile">
  <h1>Range of services to fit all your needs</h1>
  <section class="services">
    {#each services as service}
      <Service
        top={0}
        left={0}
        title={service.title}
        content={service.content}
      />
    {/each}
  </section>
</main>

<style>
  .desktop {
    background-color: var(--background-color);
    margin: 0;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    margin: 1rem 0;
    text-align: start;
    line-height: 5rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .mobile {
    display: none;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    .desktop {
      display: none;
      visibility: hidden;
    }

    .mobile {
      display: flex;
      visibility: visible;
      background-color: var(--background-color);
      margin: 0;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .services {
      display: grid;
      padding :2rem;
      grid-template-columns: 1fr 1fr;
    }

    .container {
      flex-direction: row;
      margin-bottom: 5rem;
    }

    main {
      flex-direction: column;
    }

    img {
      width: 500px;
    }
  }
</style>
