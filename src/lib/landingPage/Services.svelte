<script lang="ts">
  import logo from "$lib/assets/Designer.png";
  import Service from "$lib/components/Service.svelte";
  import { services } from "$lib/helpers/services";
  import { onDestroy, onMount } from "svelte";
  import { browser } from "$app/environment";
  let animal: HTMLDivElement;
  let eye1: HTMLImageElement;
  let eye2: HTMLImageElement;
  let animalRect: DOMRect;
  let eyeRect: DOMRect;

  function updateRects() {
    if (browser) {
      animalRect = animal.getBoundingClientRect();
      eyeRect = eye1.getBoundingClientRect();

      console.log(animalRect);
      console.log(eyeRect);
    }
  }

  function handleMouseMove(event: MouseEvent) {
    if (!animalRect || !eyeRect) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const centerY = animalRect.left + animalRect.width / 2;
    const centerX = animalRect.top + animalRect.height / 2;

    const eye1X = centerX + 80;
    const eye1Y = centerY - 1700;

    const eye2X = centerX - 820;
    const eye2Y = centerY - 1700;

    eye1.style.transform = `translate(${eye1X}px, ${eye1Y}px)`;
    eye2.style.transform = `translate(${eye2X}px, ${eye2Y}px)`;

    // const deltaX = mouseX - centerX;
    // const deltaY = mouseY - centerY;

    // const angle = Math.atan2(deltaY, deltaX);

    // const radius = Math.min(animalRect.width, animalRect.height) / 8; // adjust based on your image

    // const eyeOffsetX = Math.cos(angle) * radius;
    // const eyeOffsetY = Math.sin(angle) * radius;

    // eye1.style.transform = `translate(${eyeOffsetX}rem, ${eyeOffsetY - 30}rem)`;
    // eye2.style.transform = `translate(${eyeOffsetX}rem, ${eyeOffsetY}rem)`;
  }

  onMount(() => {
    if (browser) {
      updateRects();
      window.addEventListener("resize", updateRects);
      document.addEventListener("mousemove", handleMouseMove);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", updateRects);
      document.removeEventListener("mousemove", handleMouseMove);
    }
  });
</script>

<main on:mousemove={handleMouseMove}>
  <h1>Range of services</h1>

  <div class="container" bind:this={animal}>
    <img src={logo} width="500" alt="" />

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
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
