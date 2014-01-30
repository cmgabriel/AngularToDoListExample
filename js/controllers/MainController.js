/**
 * Created by Jay on 1/28/14.
 */

app.controller('MainController',function($scope){

    $scope.listItems = [];
    $scope.errorMessage = "";
    $scope.listItems.push({title:"This is a Test Application",completed:false});

    //Adds an item to the listItems Array
    $scope.addItem = function()
    {
        var itemText = $scope.itemText;
        $scope.showTextField = 1;
        $scope.itemText = "";
    };

    //This function add the item to the scope of the application.
    //Remember the scope variable is reset to initial value once page refershed.
    $scope.processAddItem = function()
    {
        if($scope.itemText === "")
        {
            $scope.errorMessage = "The item cannot be empty. Please add some text to it.";
        }
        else
        {
            $scope.errorMessage = "";
            $scope.showTextField = 0;
            $scope.listItems.push({title:$scope.itemText,completed:false});
        }
    };

    //Removes an item from the list.
    $scope.removeItem = function(index)
    {
        $scope.listItems.splice(index,1);
    };

    $scope.cancel = function()
    {
        $scope.showTextField =0;
        $scope.itemText = "";
    }

    $scope.markCompleted = function(index)
    {
        var completedFlag = $scope.listItems[index].completed;
        completedFlag = !(completedFlag);

    }

    $scope.clearAllItems = function()
    {
        $scope.listItems = [];
    }
});