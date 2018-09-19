var OrdersControllerModule = (function () {

  var showOrdersByTable = function () {
    
    var callback = {
        
        onSuccess: function(orders){
            
            for (j in orders){
    
                var dvTable = document.getElementById("Tables");

                var header = new Array();
                    header.push("Product");
                    header.push("Quantity");

                var table = document.createElement("table");
                table.border = "1";
                table.setAttribute("id","Table"+j);
                table.setAttribute("class","table table-sm table-dark");

                var column = 2;
                var row = table.insertRow(-1);
                var headerTable = document.createElement("th");
                headerTable.setAttribute("colspan","3");
                headerTable.innerHTML = "Table "+j;
                row.appendChild(headerTable);

                var row = table.insertRow(-1);
                for (var i=0;i<column;i++){
                    var headerCell = document.createElement("th");
                    headerCell.innerHTML = header[i];
                    row.appendChild(headerCell);
                }

                for (var i=0;i<Object.keys(orders[j].orderAmountsMap).length;i++){
                    row = table.insertRow(-1);
                    var cell = row.insertCell(-1);
                    cell.innerHTML = Object.keys(orders[j].orderAmountsMap)[i];
                    var cell = row.insertCell(-1);
                    cell.innerHTML = orders[j].orderAmountsMap[Object.keys(orders[j].orderAmountsMap)[i]];
                }

                dvTable.appendChild(document.createElement("br"));
                dvTable.appendChild(table);
            }

        },
        onFailed: function(exception){
            console.log(exception);
            alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
        }
   
    };
    
    RestControllerModule.getOrders(callback);
  };

  var updateOrder = function () {
    // todo implement
  };

  var deleteOrderItem = function (itemName) {
    // todo implement
  };

  var addItemToOrder = function (orderId, item) {
    // todo implement
  };

  return {
    showOrdersByTable: showOrdersByTable,
    //updateOrder: updateOrder,
    //deleteOrderItem: deleteOrderItem,
    //addItemToOrder: addItemToOrder
  };

})();