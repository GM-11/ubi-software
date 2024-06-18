<script lang="ts">
  import logo from "$lib/assets/Designer.png";
  import Service from "$lib/components/Service.svelte";
  import { services } from "$lib/helpers/services";
</script>

<main>
  <h1>Range of services</h1>

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
  <h1>to fit all your needs</h1>
</main>

<style>
  main {
    background-color: var(--background-color);
    margin: 0;
    padding: 2rem;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  .container {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
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

  @media (min-width: 1024px) {
    h1 {
      font-size: 4rem;
    }

    .container {
      margin-bottom: 10rem;
    }

    img {
      width: 500px;
    }
  }
</style>
