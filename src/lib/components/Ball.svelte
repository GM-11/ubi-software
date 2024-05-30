<script lang="ts">
    export let transformTop: number;
    export let transformLeft: number;
    
</script>

<div class="ball" style={
    `
    transform: translate(${transformLeft}rem, ${transformTop}rem);
    `
}></div>

<style>
  .ball {
    position: absolute;
    z-index: 0;
    width: 30rem;
    background-color: #85a8f4d7;
    height: 30rem;
    border-radius: 100%;
    filter: blur(13rem);
  }
</style>
