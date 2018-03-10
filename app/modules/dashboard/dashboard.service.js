// (function() {
//     'use strict';
//     angular
//         .module('moose.factory')
//         .factory('mooseDashboardFactory', mooseDashboardFactory);

//     /** @ngInject */

//     function mooseDashboardFactory($scope, $http) {

//         const products = {};

//         products.list = [];

//         products.add = function(items) {
//             products.list.push(items);

//         };

//         return products;
//         // this.storeApi = 'https://api.efood.real.de/api/v2/real/products/search?query=food:price-asc:category:1&currentPage=0&pageSize=25';
//         // this.storeDataFetch = function() {
//         //     var D = $q.defer();
//         //     $http.get(storeApi)
//         //         .then(function(response) {
//         //             var storeObj = [];
//         //             var myWelcome = response.data.products;
//         //             var isResultArray = Array.isArray(myWelcome);
//         //             console.log("isResultArray", isResultArray)
//         //             for (var i = 0; i < myWelcome.length; i++) {
//         //                 console.log("myWelcome", myWelcome[i].name)
//         //                 console.log("myWelcome", myWelcome[i])
//         //                 var dataObj = {
//         //                     pAssortmentGroup: myWelcome[i].assortmentGroup,
//         //                     pBrand: myWelcome[i].brand,
//         //                     pName: myWelcome[i].name,
//         //                     pImage: myWelcome[i].images,
//         //                     pPrice: myWelcome[i].price.value
//         //                 }
//         //                 storeObj.push(dataObj)
//         //             }
//         //             D.resolve(storeObj)
//         //             console.log('storeObj', storeObj)
//         //         })

//         //         return D.promise
//         // };


//     }

// })();