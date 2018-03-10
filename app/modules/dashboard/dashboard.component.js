(function() {
    'use strict';
    angular
        .module('moose.dashboard')
        .component('mooseDashboard', {
            controller: DashboardController,
            templateUrl: 'app/modules/dashboard/dashboard.component.html'
        });

    function DashboardController($http, $log) {
        var ctrl = this;
        ctrl.storeObj = [];
        ctrl.cartObj = [];
        ctrl.imageUrl = 'https://www.real.de/lebensmittelshop';
        ctrl.storeApi = 'https://api.efood.real.de/api/v2/real/products/search?query=food:price-asc:category:1&currentPage=0&pageSize=25';
        //using get API for data
        $http.get(ctrl.storeApi)
            .then(function(response) {
                var myWelcome = response.data.products;
                var isResultArray = Array.isArray(myWelcome);
                for (var i = 0; i < myWelcome.length; i++) {
                    var dataObj = {
                        pAssortmentGroup: myWelcome[i].assortmentGroup,
                        pBrand: myWelcome[i].brand,
                        pName: myWelcome[i].name,
                        pImage: myWelcome[i].images,
                        pPrice: myWelcome[i].price
                    }
                    if (myWelcome[i].price != null || myWelcome[i].price != undefined) {
                        dataObj.pPrice = myWelcome[i].price.value
                    }
                    angular.forEach(dataObj.pImage, function(k, v) {
                        dataObj.pImage = ctrl.imageUrl + k.url;
                    })
                    ctrl.storeObj.push(dataObj)
                }
            });

        //to add data to shopping cart
        ctrl.addToCart = function(item) {
            var cartSessionData = sessionStorage.getItem("cartObj");
            if (!cartSessionData) {
                cartSessionData = [];
            } else {
                cartSessionData = angular.fromJson(cartSessionData)
            }
            cartSessionData.push(item)
            sessionStorage.setItem("cartObj", angular.toJson(cartSessionData));
        }
    }
})();