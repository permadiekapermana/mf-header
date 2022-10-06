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
    isEmpty(obj){
      return obj==null || obj===undefined || obj==='';
    },
    isNotEmpty(obj){
      return !(obj==null || obj===undefined || obj==='');
    }
}