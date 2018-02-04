//angular.module('mapquest').controller('HotelsController', HotelsController);
//
//function HotelsController(hotelDataFactory){
//    var vm = this;
//    vm.title = 'Snappy Chap app';
//    hotelDataFactory.hotelList().then(function(response){
//        console.log(response.data);
//        vm.hotels = response.data;
//    });
//}
//

angular.module('mapquest').controller('ContentController', ContentController);

function ContentController(){
    var vm = this;
    vm.title = 'Content app';
}

//angular.module('mapquest', []).controller('ContentController', ['$scope', ContentController]);
//
//function ContentController($scope) {
//    console.log("inside of ContentController");
//  $scope.name = 'John Smith';
//  $scope.contacts = [
//    {type:'phone', value:'408 555 1212'},
//    {type:'email', value:'john.smith@example.org'}
//  ];
//
//  $scope.greet = function() {
//    alert($scope.name);
//  };
//
//  $scope.addContact = function() {
//    $scope.contacts.push({type:'email', value:'yourname@example.org'});
//  };
//
//  $scope.removeContact = function(contactToRemove) {
//    var index = $scope.contacts.indexOf(contactToRemove);
//    $scope.contacts.splice(index, 1);
//  };
//
//  $scope.clearContact = function(contact) {
//    contact.type = 'phone';
//    contact.value = '';
//  };
//}
