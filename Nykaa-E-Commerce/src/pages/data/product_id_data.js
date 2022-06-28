import axios from 'axios';

export function getDataa(id,callback){
    axios.get("http://localhost/project/product.php?id="+id)
    .then(res => {
      if(callback != null){
         callback(res.data);
      }
    })
}

export default getDataa;