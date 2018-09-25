var RestControllerModule = (function () {

    var getOrders = function (callback) {
        axios.get('/orders')
            .then(function (orders){
                return callback.onSuccess(orders.data);
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
            })
    };

    var deleteOrder = function (orderId, callback) {
        axios.delete('/orders/'+orderId)
            .then(function(response){
                callback.onSuccess(response);
            })
            .catch(function (error){
                callback.onFailed(error);
            })
    };

    var createOrder = function (order, callback) {
        axios.post('/orders',order)
            .then(function(){
                callback.onSuccess();
            })
            .catch(function(error){
                callback.onFailed(error);
            })
    };

    return {
        getOrders: getOrders,
        updateOrder: updateOrder,
        deleteOrder: deleteOrder,
        createOrder: createOrder
    };

})();