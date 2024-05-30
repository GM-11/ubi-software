<script lang="ts">
  import Ball from "$lib/components/Ball.svelte";
  import { expertises } from "$lib/helpers/expertise";

  let exp = ["Select your expertise", ...expertises];

  let name: string;
  let email: string;
  let mobile: string;
  let expertise: string;
</script>

<main>
  <Ball transformLeft={20} transformTop={7} />

  <section>
    <form>
      <input
        bind:value={name}
        placeholder="Name"
        type="text"
        id="name"
        name="name"
      />
      <input
        bind:value={email}
        placeholder="Email"
        type="email"
        id="email"
        name="email"
      />
      <input
        bind:value={mobile}
        placeholder="Mobile #"
        type="mobile"
        id="mobile"
        name="mobile"
      />
      <select bind:value={expertise} name="expertise" id="expertise">
        {#each exp as expertise}
          {#if expertise === "Select your expertise"}
            <option value="" selected disabled>{expertise}</option>
          {:else}
            <option value={expertise}>{expertise}</option>
          {/if}
        {/each}
      </select>

      <button>Submit</button>
    </form>
  </section>

  <section>
    <h1>Join our incredible team</h1>
  </section>
</main>

<style>
  main {
    padding-top: 10rem;
    padding-inline: 4rem;
    background-color: var(--background-color);
    min-height: 100vh;
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
  select {
    border: none;
    padding: 1.5rem;
    border-radius: 10px;
    width: 80%;
    margin: 0.75rem;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    text-align: end;
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
    height: max-content;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }
</style>
