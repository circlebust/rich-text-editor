import axios from 'axios';


const selectPrice = () => Array.from(document.querySelectorAll("div.price>div.text"));

export class PricetrackerService {

    fetchPrice(){
        return axios.
    }
}

TDConf.Config = {
    products:[
        { id: '1', price: 'CHF 96.45', currency: 'CHF', name: 'Heizöl MIGROL extra leicht'},
        { id: '2', price: 'CHF 99.45', currency: 'CHF', name: 'Heizöl MIGROL ÖKO PLUS®'},
        { id: '3', price: 'CHF 101.45', currency: 'CHF', name: 'Heizöl MIGROL GREENLIFE®'}
    ],  
    Category_name: 'Heizöl', 
    containerTagId: '19428'
};