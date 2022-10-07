<template>
  <CBreadcrumb class="d-md-down-none me-auto mb-0" id="AppBreadcrumb">
    <CBreadcrumbItem
      v-for="item in breadcrumbsJsonValue"
      :key="item"
      :href="item.active ? '' : item.path"
      :active="item.active"
    >
      {{ item.name }}
    </CBreadcrumbItem>
    <CButton @click="breadcrumbsStrJsonValueChange()" id="breadcrumbsChangeValue" 
    :style="{visibility: 'hidden'}">abc</CButton>
  </CBreadcrumb>  
</template>

<script>

export default {
  el:'#AppBreadcrumb',
  name: 'AppBreadcrumb',
  data() {
      return {
        breadcrumbsJsonValue: [{"active":false,"name":"Home","path":"/#/"}]
      }
  },
  methods: {
    breadcrumbsStrJsonValueChange(){
      this.breadcrumbsJsonValue = JSON.parse(localStorage.breadcrumbs)
    }
  }
}
</script>
