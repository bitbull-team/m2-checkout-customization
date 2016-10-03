/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {

   config:{
       mixins: {
           'Magento_Checkout/js/action/set-shipping-information': {
               'Bitbull_CustomCheckout/js/action/set-shipping-information-mixin': true
           }
       }
   },
    map: {
        "*": {
            "Bitbull_CustomCheckout/js/invoice-check-change": "Bitbull_CustomCheckout/js/invoice-check-change",
            "Bitbull_CustomCheckout/js/invoice-input": "Bitbull_CustomCheckout/js/invoice-input"
        }
    }
};
