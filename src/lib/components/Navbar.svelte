<script>
  import octopus from "$lib/assets/Designer.png";
</script>

<main>
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

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    background: linear-gradient(rgba(26, 14, 155, 0.5), rgba(83, 29, 235, 0.5));
    border-radius: 10px;
    padding: 1rem;
  }
  .logo {
    background-color: none;
    border-bottom: none;
  }
  .logo:hover {
    background-color: transparent;
    border-bottom: none;
  }

  main {
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
</style>
