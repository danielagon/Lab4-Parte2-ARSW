var RestControllerModule = (function () {

    var getOrders = function (callback) {
        axios.get('/orders')
            .then(function (orders){
                callback.onSuccess(orders.data);
            })
            .catch(function (error) {
                callback.onFailed(error);
            });
    };

    var updateOrder = function (order, callback) {
        axios.put('/orders',order)
            .then(function(){
                callback.onSuccess();
            })
            .catch(function(error){
                callback.onFailed(error);
            });
    };

    var deleteOrder = function (orderId, itemName, callback) {
        axios.delete('/orders/'+orderId+'/'+itemName)
            .then(function(){
                callback.onSuccess();
            })
            .catch(function (error){
                callback.onFailed(error);
            });
    };

    var createOrder = function (order, callback) {
        // todo implement
    };
    
    var showOrder = function (orderId, callback){
        axios.get('/orders/'+orderId)
            .then(function (orders){
                callback.onSuccess(orders.data);
            })
            .catch(function(error){
                callback.onFailed(error);
            });
    };

    return {
        getOrders: getOrders,
        updateOrder: updateOrder,
        deleteOrder: deleteOrder,
        createOrder: createOrder,
        showOrder: showOrder
    };

})();