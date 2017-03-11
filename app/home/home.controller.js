angular.module('BudgetApp')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;

    vm.test = "test text";
    vm.list = [ ];
    vm.click = function click() {
        vm.newObject = {"description": vm.description, "moneyIn": vm.moneyIn};
        vm.list.push(vm.newObject);
        vm.description = " ";
        vm.moneyIn = "0";
    }

}
