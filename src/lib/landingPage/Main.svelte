<script>
  import Ball from "$lib/components/Ball.svelte";
</script>

<main>
  <Ball transformLeft={-20} transformTop={5} />
  <h1>UBI SOFTWARE</h1>
  <p>We build with you, not for you</p>
  <a href="/contact">Connect with us</a>
</main>

<style>
  main {
    display: flex;
    background-color: var(--background-color);
    margin: 0;
    height: 100vh;

    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  a {
    border: 2px solid var(--text-color);
    border-radius: 10px;
    padding: 1rem 2rem;
    margin: 1rem 0;
    background-color: transparent;
    color: var(--text-color);
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
  }

  a:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 7rem;
  }
</style>
