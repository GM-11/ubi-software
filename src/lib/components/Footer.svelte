<script>
</script>

<footer>
  <section class="content">
    <h1>UBI Software</h1>
    <section>
      <a href="/"> Home </a>
      <a href="/about"> About Us </a>
      <a href="/contact"> Contact Us </a>
      <a href="/join"> Join Us </a>
    </section>
  </section>
  <hr />
  <p>
    &copy; {new Date().getFullYear()} UBI Software. All rights reserved.
  </p>
</footer>

<style>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer {
    background: linear-gradient(rgb(15, 8, 95), rgb(62, 21, 175));
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  hr {
    border: 1.5px solid var(--text-color);
    width: 100%;
    border-radius: 100px;
  }
  h1 {
    font-size: 2rem;
  }

  p {
    color: var(--text-color);
    text-align: center;
    margin: 1rem 0;
    font-size: 1rem;
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
    .content {
      flex-direction: column;
      align-items: center;
    }
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
    h1 {
      margin-bottom: 1rem;
    }
    a {
      margin: 0.5rem 0;
    }
  }
</style>
