import axios from 'axios';
export default class Service {
    getItems  = (page: string) => {

        // return new Promise((resolve,reject)=>{
        //     resolve("anza");
        // })
        return axios(
            {
                method: 'GET',
                url:  'http://107.23.201.162:3000/getComedies?page='+page               
            });
}
getSearch  = (search: string) => {

    // return new Promise((resolve,reject)=>{
    //     resolve("anza");
    // })
    return axios(
        {
            method: 'GET',
            url:  'http://107.23.201.162:3000/search?search='+search              
        });
}

}