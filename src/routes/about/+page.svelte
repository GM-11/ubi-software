<script>
  import Ball from "$lib/components/Ball.svelte";
  import oct from "$lib/assets/octopus_3d.png";
</script>

<main>
  <Ball transformLeft={0} transformTop={0} />
  <br /><br />
  <h1>Why our clients won’t stop raving about us</h1>
  <section>
    <img src={oct} width="400" alt="" />

    <p>
      The team at UBI software is thoughtfully composed of professional team of
      developers. Who have a strong work ethic and embody our company’s core
      values.
      <br />
      <br />

      You’ve never worked with as dedicated team as ours, and we can promise
      that you won’t find one as committed to your business growth, anywhere
      else in this industry

      <br />
      <br />
      Our motto is to build your project/business with you and sustain a core relationship.
      We maintain a progressive outlook, always identifying trends to set ourselves
      apart from the competition and to be at the forefront of the digital world.

      <br />
      <br />
      From beginning to end, we guarantee your business will thrive through our customized
      solutions. We commit to delivering data-driven strategies and using A.I. for
      the best results from start to finish.
    </p>
  </section>
</main>

<style>
  main {
    background-color: var(--background-color);
    padding: 10rem 4rem;
    overflow: hidden;
  }

  h1 {
    font-size: 5rem;
    line-height: 6rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--text-color);
    line-height: 2.5rem;
    margin: 0;
  }

  section {
    margin-top: 10rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    text-align: end;
  }

  @media (max-width: 768px) {
    main {
      padding: 5rem 2rem;
    }

    h1 {
      font-size: 3rem;
      line-height: 4rem;
    }

    img {
      display: none;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    section {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
</style>
