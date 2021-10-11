Vue.component('input-container-component', {
  template: ` 
    <div class="form-group">
        <label :for="id" class="form-label text-muted">{{titulo}}</label>
        <slot></slot>
        <div :id="idHelp" class="form-text text-muted">{{textoAjuda}}</div>
    </div>
    `,
  props: ['id', 'titulo', 'idHelp', 'textoAjuda']
})