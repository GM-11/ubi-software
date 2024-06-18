<script lang="ts">
  export let left: number;
  export let top: number;

  export let title: string;
  export let content: string;
</script>

<div
  class="service-desktop"
  style={`transform: translate(${left}rem, ${top}rem);`}
>
  <section class="content">
    <h2>{title}</h2>
    <p>{content}</p>
  </section>
</div>

<div class="service-mobile">
  <section class="content">
    <h2>{title}</h2>
    <br />
    <br />
    <p>{content}</p>
  </section>
</div>

<style>
  .service-desktop {
    position: absolute;
    /* background-color: rgb(2, 61, 61); */
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
      /* height: 3.5rem;
      width: 3.5rem; */
      padding: 2rem;
      z-index: 0;
    }

    .service-mobile h2 {
      font-size: 1rem;
      line-height: 1rem;
    }
    .service-mobile p {
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
  }
</style>
