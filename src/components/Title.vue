<template>
  <div class="container">
    <div class="title-wrapper grid-content shadow">
      <img
        src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
        alt=""
      />

      <div class="title-info">
        <h2 class="title">領養毛小孩</h2>
        <h4 class="description">用領養代替購買，帶毛小孩回家一起生活吧</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-info {
  padding: 2rem;
}

.title {
  color: var(--brand-color);
}

.description {
  color: var(--normal-color);
}

@media (max-width: 576px) {
  .title-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>