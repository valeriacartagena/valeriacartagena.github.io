<template>
  <theme-provider :theme="theme">
    <hero
      v-bind:author="author"
      v-bind:subtitle="hero.subtitle"
      v-bind:description="hero.description"
      v-bind:cta="hero.cta"
    />
    <card-container id="products">
      <card
        v-for="(product, index) in products.featured" :key="index"
        v-bind:name="product.name"
        v-bind:medium="product.medium"
        v-bind:summary="product.summary"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
      <minor-card-container>
        <minor-card
          v-for="(product, index) in products.minor && products.minor.slice(0,3)" :key="index"
          v-bind:name="product.name"
          v-bind:description="product.description"
          v-bind:link="product.link"
        />
      </minor-card-container>
      <logo-section-container>
        <main-title>{{logoSection.title}}</main-title>
        <logo-container>
          <logo-card
            v-for="(logo, index) in logoSection.logos && logoSection.logos.slice(0,3)" :key="index"
            v-bind:src="logo.src"
            v-bind:url="logo.url"
            v-bind:alt="logo.alt"
          />
        </logo-container>
      </logo-section-container>
    </card-container>
    <foot v-bind:author="author" v-bind:footer="footer" />
    <light-toggle v-on:click="toggleTheme()"><span v-if="!isDark" >💡</span><span v-if="isDark">💡</span></light-toggle>
  </theme-provider>
</template>

<script>
export default {
  name: 'HomePage',
  // You will need to copy the data(), methods(), etc. from App.vue into here too!
}
</script>
