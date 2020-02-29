<template>
  <div id="app">
    <pre>
      <div class="mermaid">
        graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
      </div>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted: () => {
    mermaid.initialize({ startOnLoad: false })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
