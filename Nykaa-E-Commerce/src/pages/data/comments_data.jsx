import axios from 'axios';

export function getDataaa(id,callback){
    axios.get("http://localhost/project/comentid.php?id="+id)
    .then(res => {
      if(callback != null){
         callback(res.data);
      }
    })
}

export default getDataaa;