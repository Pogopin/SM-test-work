<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
  const decrement = () => {
    count -= 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>

<button on:click={decrement}>
  count is {count}
</button>