
import utils from "@/utils/CommonUtils"

export default {
    async jsonApi( uri, method, jsonBody){
      try{
        let response = await fetch( process.env.VUE_APP_SC_API_URL + uri, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              "Authorization": 'Bearer ' + localStorage.id_token,
            },
            body: jsonBody
        } );
        let jsonResponse = await response.json();
        if(jsonResponse.title==='Unauthorized'){
          utils.error(jsonResponse.detail);
        }
        return jsonResponse;
      }catch(e){       
        // console.log(e.message+('Failed to fetch'==e.message?' BE API':''))
        utils.error(e.message+('Failed to fetch'==e.message?' BE API':''));
      }
    },
    async queryApi( uri, method, queryParam){
      try{
        console.log(process.env.VUE_APP_CONTAINER_URL)
        console.log(process.env.VUE_APP_SC_API_URL)
        let response = await fetch( process.env.VUE_APP_SC_API_URL + uri + (this.isEmpty(queryParam)?'':('?' + queryParam)), {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              "Authorization": 'Bearer ' + localStorage.id_token,
            },
        } );
        let jsonResponse = await response.json();
        if(jsonResponse.title==='Unauthorized'){
          utils.error(jsonResponse.detail);
        }
        return jsonResponse;
      }catch(e){        
        // console.log(e.message+('Failed to fetch'==e.message?' BE API':''))
        utils.error(e.message+('Failed to fetch'==e.message?' BE API':''));
      }
    },
    isEmpty(obj){
      return obj==null || obj===undefined || obj==='';
    },
    isNotEmpty(obj){
      return !(obj==null || obj===undefined || obj==='');
    }
}