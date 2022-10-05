<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
      <!-- <CHeaderToggler class="ps-1" onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()"> -->
        <CIcon icon="cil-menu" size="lg" style="color: #EB0A1E" />
      </CHeaderToggler>
      <CHeaderBrand class="mx-auto d-lg-none d-md-none">
        <h3>Manufacturing Connectivity Platform</h3>
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <h3>Manufacturing Connectivity Platform</h3>
      </CHeaderNav>
      <CHeaderNav>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid style="min-height: 19px !important;">
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { logo } from '@/assets/brand/logo'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    return {
      logo,
    }
  },
}
</script>
