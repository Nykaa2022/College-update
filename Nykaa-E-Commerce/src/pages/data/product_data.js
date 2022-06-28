import axios from 'axios';

export function getData(callback){
    axios.get("http://localhost/project/allproduct.php")
    .then(res => {
      if(callback != null){
         callback(res.data);
      }
    })
}

export default getData;