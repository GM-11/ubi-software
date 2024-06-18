<script lang="ts">
  import Ball from "$lib/components/Ball.svelte";
  import { expertises } from "$lib/helpers/expertise";

  let exp = ["Select your expertise", ...expertises];

  let name: string;
  let email: string;
  let mobile: string;
  let expertise: string;

  function emailIsValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function mobileNumberValid() {
    return /^[0-9]{10}$/.test(mobile);
  }

  function validExpertise() {
    return expertise !== "Select your expertise";
  }

  async function sendMail(e: MouseEvent) {
    if (!emailIsValid()) {
      alert("Please enter a valid email address");
      return;
    }

    if (!mobileNumberValid()) {
      alert("Please enter a valid mobile number");
      return;
    }

    if (!validExpertise()) {
      alert("Please select your expertise");
      return;
    }

    e.preventDefault();
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile, expertise}),
    });
    const x = await res.json();
    console.log(x);
  }

</script>

<main>
  <Ball transformLeft={0} transformTop={7} />

  <section>
    <br /><br />
    <h1>Join our incredible team</h1>
    <br /><br />
  </section>

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

      <button on:click={sendMail}>Submit</button>
    </form>
  </section>
</main>

<style>
  main {
    padding-top: 10rem;
    padding-inline: 4rem;
    background-color: var(--background-color);
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
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
    height: 60%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    main {
      padding: 5rem 2rem;
      flex-direction: column;
    }
    h1 {
      text-align: center;
      font-size: 4rem;
      line-height: 4rem;
    }

    form {
      height: 100%;
      padding: 2rem 0;
    }

    section {
      width: 100%;
    }
  }
</style>
