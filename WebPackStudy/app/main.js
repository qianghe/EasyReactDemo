'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './FilterList.jsx';

//search list source data
/*
let listArr = [
    {data:'Apples'},{data:'Broccoli'},{data:'Chicken'},
    {data:'Duck'},{data:'Eggs'},{data:'Fish'},{data:'Granola'},
    {data:'Hash Browns'}
];*/

let shopItemList = [
    {
        title: 'The Hobbit',
        describe : 'In The Hobbit, Bilbo Baggins is whisked away from his comfortable, unambitious life in Hobbiton by the wizard Gandalf and a company of dwarves',
        priceDes :[
            {
                size : '10',
                price: '21.5'
            },
            {
                size: '20',
                price: '32.9'
            },
            {
                size: '30',
                price: '41.5'
            }
        ]
    }
];

ReactDOM.render(<Counter data = {shopItemList}/>,document.getElementById('app'));