<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false"  href="#">
      <h6>{{userName}}&nbsp;<CIcon class="user-arrow" icon="cilChevronBottom" /></h6>
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="fw-semibold py-2">
        Account
      </CDropdownHeader>
      <CDropdownItem> <CIcon icon="cil-user" /> Profile </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem @click="logout()">
        <CIcon icon="cilAccountLogout" /> Logout
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
import api from "@/apis/CommonAPI"
export default {
  name: 'AppHeaderDropdownAccnt',
  data(){
    return {
      userName: 'User Name 1'
    }
  },
  async created(){
    let dataUser = await api.queryApi('/api/common/user-info','POST' );
      
    this.userName = dataUser.data.firstName+' '+dataUser.data.lastName;
  },
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
  methods:{
    logout(){      
      localStorage.id_token = '';
      window.location.href=process.env.VUE_APP_CONTAINER_URL+'/';
    }
  }
}
</script>
