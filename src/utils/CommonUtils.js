import Swal from 'sweetalert2'
import router from '../router'

export default {
    error(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message || 'Something went wrong!',
          })
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
      let response = await fetch( 'http://localhost:9081' + uri, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + localStorage.id_token,
          },
          body: jsonBody
      } );
      let jsonResponse = await response.json();
      if(jsonResponse.title==='Unauthorized'){
        this.error(jsonResponse.detail);
      }
      return jsonResponse;
    },
    async queryApi( uri, method, queryParam){
      let response = await fetch( 'http://localhost:9081' + uri + (this.isEmpty(queryParam)?'':('?' + queryParam)), {
          method: method, // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + localStorage.id_token,
          },
      } );
      let jsonResponse = await response.json();
      if(jsonResponse.title==='Unauthorized'){
        this.error(jsonResponse.detail);
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