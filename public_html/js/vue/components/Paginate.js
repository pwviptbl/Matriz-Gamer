Vue.component('paginate-component', {
  template: `
  <nav aria-label="Page navigation example">
    <ul class="pagination" style="cursor:pointer">
      <slot></slot>
    </ul>
  </nav>
  `
})