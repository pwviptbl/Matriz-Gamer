Vue.component('card-component', {
  template: `
  <div class="card mb-3">
        <div class="card-header">.: {{titulo}}</div>

        <div class="card-body">
            <slot name="conteudo"></slot>
        </div>

        <div class="card-footer">
            <slot name="rodape"></slot>
        </div>
    </div>
    `,
  props: ['titulo']
})