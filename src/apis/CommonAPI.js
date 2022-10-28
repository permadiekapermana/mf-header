import Swal from 'sweetalert2'
import router from '../router'

export default {
    error(message, callback) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message || 'Something went wrong!',
          }).then(() => {
            if(callback) callback();
          });
    },
    backToPreviousPage() {
        Swal.fire({
          title: 'Back to previous page?',
          text: 'All filed forms will be lost!',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: `No`,
          customClass: {
            confirmButton: 'btn btn-primary me-4',
            cancelButton: 'btn btn-outline-primary',
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            router.back()
          }
        })
    },
    async jsonApi( uri, method, jsonBody){
      let response = await fetch( process.env.VUE_APP_SC_API_URL + uri, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + localStorage.id_token,
          },
          body: jsonBody
      } );
      let jsonResponse = await response.json();
      if(jsonResponse.status==='401'){
        // this.error(jsonResponse.detail,()=>{
          localStorage.id_token = '';
          window.location.href=process.env.VUE_APP_CONTAINER_URL;            
        // });
      }
      return jsonResponse;
    },
    async queryApi( uri, method, queryParam){
      let response = await fetch( process.env.VUE_APP_SC_API_URL + uri + (this.isEmpty(queryParam)?'':('?' + queryParam)), {
          method: method, // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + localStorage.id_token,
          },
      } );
      let jsonResponse = await response.json();
      if(jsonResponse.status==='401'){
        // this.error(jsonResponse.detail,()=>{
          localStorage.id_token = '';
          window.location.href=process.env.VUE_APP_CONTAINER_URL;            
        // });
      }
      return jsonResponse;
    },
    isEmpty(obj){
      return obj==null || obj===undefined || obj==='';
    },
    isNotEmpty(obj){
      return !(obj==null || obj===undefined || obj==='');
    }
}