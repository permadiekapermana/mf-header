const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  // outputDir: path.resolve(__dirname, "../public/header/"),
  //outputDir: "/var/www/html/header",
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    externals: ['vue', 'vue-router', /^@tmcp\/.+/],
    
  },
  lintOnSave: false
})

/*module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) =>
            [
              'CHeaderBrand',
              'CNavLink',
              'CNavItem',
              'CHeaderNav',
              'CContainer',
              'CHeaderDivider',
              'CHeader',
              'CAvatar',
              'CDropdownToggle',
              'CDropdownHeader',
              'CIcon',
              'CBadge',
              'CDropdownItem',
              'CDropdownDivider',
              'CDropdownMenu',
              'CDropdown',
              'CBreadcrumbItem',
              'CBreadcrumb',
              'CCol',
              'CButton',
              'CButtonGroup',
              'CRow',
              'CCardBody',
              'CProgress',
              'CCardFooter',
              'CCard',
              'CCardHeader',
              'CTableHeaderCell',
              'CTableRow',
              'CTableHead',
              'CTableDataCell',
              'CTableBody',
              'CTable',
              'CWidgetStatsA',
              'CWidgetStatsB',
              'CWidgetStatsC',
              'CWidgetStatsD',
              'CWidgetStatsE',
              'CWidgetStatsF',
              'CFooter',
            ].indexOf(tag) > -1,
        },
      }))
  },
}*/
