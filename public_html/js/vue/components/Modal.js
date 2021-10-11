Vue.component('modal-component', {
  template: `
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{titulo}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="alertas"></slot>
          <slot name="conteudo"></slot>
        </div>
        <div class="modal-footer">
          <slot name="rodape"></slot>
        </div>
      </div>
    </div>
  </div>
    `,
   props: ['id', 'titulo']
})