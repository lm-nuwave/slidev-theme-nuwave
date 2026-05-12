<template>
  <header class="nw-header" :class="{ 'nw-header--titled': $frontmatter?.title }">
    <span v-if="$frontmatter?.title" class="nw-header__title">
      {{ $frontmatter.title }}
    </span>
    <img
      class="nw-header__logo"
      src="/nuwave-logo.png"
      alt="NuWave Energy Solutions"
    />
  </header>
</template>

<style scoped>
.nw-header {
  display: flex;
  align-items: center;
  padding: 0 var(--space-5) 0 var(--space-6);
  flex-shrink: 0;
  height: 52px;
  pointer-events: none;
  border-bottom: 1px solid var(--color-rule-light);
}

.nw-header--titled {
  border-bottom: none;
  box-shadow: inset 0 calc(-1 * var(--rule-thick)) 0 0 var(--color-accent);
}

.nw-header__title {
  flex: 1;
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-fg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-5);
  line-height: 1;
}

.nw-header__logo {
  margin-left: auto;
  height: 36px;
  width: auto;
  display: block;
  flex-shrink: 0;
}
</style>
