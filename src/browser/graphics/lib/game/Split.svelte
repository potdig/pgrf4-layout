<script lang="ts">
  import { splitOf } from '~/browser/store/speedcontrol/timer'

  export let id: string
  export let small: boolean = false

  $: split = splitOf(id)
</script>

<p class="split" class:small>
  {#if $split}
    {$split}
  {/if}
</p>

<style lang="scss" scoped>
  $height: 1em;

  .split {
    height: $height;
    line-height: $height;
    color: rgb(0, 65, 255);
    font-family: 'Nova Mono', sans-serif;
    font-weight: bold;
    font-size: 1.4em;
    margin-top: 4px;
    text-align: right;

    &.small {
      font-size: 1.2em;
    }
  }
</style>
