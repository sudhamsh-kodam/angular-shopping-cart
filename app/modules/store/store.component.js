(function() {
    'use strict';
    angular
        .module('moose.store', [])
        .component('mooseStore', {
            controller: StoreController,
            templateUrl: 'app/modules/store/store.component.html'
        });

    function StoreController($log) {
        var ctrl = this;
        //getting and setting the values from session if avaliable 
        ctrl.cartName = sessionStorage.getItem("cartName");
        if (ctrl.cartName != null || ctrl.cartName != undefined) {
            ctrl.cartName = angular.fromJson(ctrl.cartName)
        } else {
            ctrl.cartName = "Food Cart"
        }
        ctrl.cartData = sessionStorage.getItem("cartObj");
        if (ctrl.cartData) {
            ctrl.cartData = angular.fromJson(ctrl.cartData)
        } else {
            ctrl.cartName = "Add Items To Cart"
        }
        //to change the name of shopping cart
        ctrl.cartNameCg = function(cartName) {
            sessionStorage.setItem("cartName", angular.toJson(cartName))
        }
        //to remove the items from cart
        ctrl.removeFromCart = function(index) {
            ctrl.cartData.splice(index, 1);
            sessionStorage.setItem("cartObj", angular.toJson(ctrl.cartData));
        }
    }
})();