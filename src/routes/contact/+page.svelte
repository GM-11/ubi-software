<script>
  import Ball from "$lib/components/Ball.svelte";
</script>

<main>
    <Ball transformLeft={20} transformTop={7}/>
  <section>
    <h1>Reach out to us</h1>
  </section>
  <section>
    <form>
      <input placeholder="Name" type="text" id="name" name="name" />

      <input placeholder="Email" type="email" id="email" name="email" />

      <textarea placeholder="Message" id="message" name="message"></textarea>

      <button type="submit">Submit</button>
    </form>
  </section>
</main>

<style>
  main {
    padding-top: 10rem;
    padding-inline: 4rem;
    background-color: var(--background-color);
    height: 100vh;
    display: flex;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 50%;
  }

  input,
  textarea {
    border: none;
    padding: 1.5rem;
    border-radius: 10px;
    width: 80%;
    margin: 0.75rem;
    font-family: "Poppins", sans-serif;
  }

  button {
    border: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    width: 80%;
    background: linear-gradient(var(--accent-color), var(--secondary-color));
    color: var(--text-color);
    transition: 0.3s ease-in-out;
  }
  button:hover {
    border-radius: 100px;
    transition: 0.3s ease-in-out;
  }

  form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }
</style>
