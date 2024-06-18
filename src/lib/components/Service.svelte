<script lang="ts">
  export let left: number;
  export let top: number;

  export let title: string;
  export let content: string;

  let mobileIsOpen = false;
</script>

<div
  class="service-desktop"
  style={`transform: translate(${left}rem, ${top}rem);`}
>
  <div class="content">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
</div>

<button
  class="service-mobile"
  on:click={() => {
    mobileIsOpen = !mobileIsOpen;
  }}
>
  <h2>{title}</h2>
  <br />
  {#if mobileIsOpen}
    <p>{content}</p>
  {/if}
</button>

<style>
  .service-desktop {
    position: absolute;
    border-radius: 100rem;
    background: linear-gradient(
      to bottom right,
      var(--primary-color),
      var(--secondary-color),
      var(--background-color)
    );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0;
    transition: 0.3s ease-in-out;
    height: 3.5rem;
    width: 3.5rem;
    transition: 0.3s ease-in-out;
    z-index: 0;
  }

  .service-desktop h2 {
    opacity: 0;
    margin: 0;
    font-size: 0;
  }

  .service-desktop p {
    opacity: 0;
    margin: 0;
    font-size: 0;
  }

  .service-desktop:hover {
    transition: 0.3s ease-in-out;
    z-index: 5;
    height: fit-content;
    width: fit-content;
    padding: 3rem;
  }

  .service-desktop:hover h2 {
    opacity: 1;
    margin: 0;
    font-size: 2rem;
  }

  .service-desktop:hover p {
    opacity: 1;
    margin: 0;
    font-size: 1rem;
  }

  .service-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .service-desktop {
      display: none;
    }

    .service-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0;
      transition: 0.3s ease-in-out;
      background: linear-gradient(
        to bottom right,
        var(--primary-color),
        var(--secondary-color),
        var(--background-color)
      );
      margin: 1rem;
      border-radius: 10px;
      padding: 2rem;
      z-index: 0;
      border: none;
    }

    .service-mobile h2 {
      font-size: 1rem;
      line-height: 1rem;
      transition: 0.3s ease-in-out;
    }
    .service-mobile p {
      transition: 0.3s ease-in-out;
      margin-top: 0.75rem;
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
  }
</style>
