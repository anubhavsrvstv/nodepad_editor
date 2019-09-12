myFirstApp.controller("appCtrl", function ($scope, $state, $http, ) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.saveuser = function (user, pwd) {
        console.log("detail", user, pwd);
        if (user && pwd) {
            $http({
                method: 'POST',
                url: '/api/user',
                headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' },
                data: { "username": user, "password": pwd }
            }).then(function (response) {
                // console.log("Response", response);
                $scope.data = response.data;
                alert('Successfully saved');
                $state.go('notepad');
            }, function (error) {
                console.log("error23: ", error);
                alert('Error! Please contact admin.', 'inverse');
            });


        } else {
            alert('Please enter username and password')
        }
    }

    $scope.getNotes = function () {

        $http({
            method: 'GET',
            url: '/api/notes',
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        }).then(function (response) {
            console.log("Response", response.data);
            $scope.data = response.data;
        }, function (error) {
            console.log("error23: ", error);
            alert('Error! Please contact admin.', 'inverse');
        });

    }

    $scope.saveData = function () {
        console.log("notes",$scope.notes);
        $http({
            method: 'POST',
            url: '/api/notes',
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' },
            data:{"myNotes":$scope.notes}
        }).then(function (response) {
            console.log("Response", response.data);
            $scope.data = response.data;
            $state.reload();
        }, function (error) {
            console.log("error23: ", error);
            alert('Error! Please contact admin.', 'inverse');
        });

    }

    $scope.dataUpdate = function (id,newdata) {
        console.log("id",id,newdata);
        $http({
          method : "PUT",
          url : 'api/updateData',
         data:{'id':id,'data':newdata},
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'},
        }).then(function (response) {
          // $scope.data = response.data
          console.log(response);
          $state.reload();
        
        }, function (error) {
          console.log(err)
          // $scope.myWelcome = response.statusText;
    
        });
      }
    
    
    
    
    
    
      $scope.removeData = function (id) {
        console.log("id",id);
        $http({
            method : "DELETE",
              url : 'api/deleteData',
              headers: { 'id':id,'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
          }).then(function mySuccess(response) {
            $scope.data = response.data.data;
            console.log(response);
            $state.reload();
          }, function myError(err) {
              console.log(err)
            // $scope.myWelcome = response.statusText;
          });
      };
    

});