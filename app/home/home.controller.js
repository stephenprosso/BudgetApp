angular.module('BudgetApp')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;

    vm.incomeArray = [ ];
    vm.incomeClick = function incomeClick() {
        vm.newObject = {"incomeDescription": vm.incomeDescription, "moneyIn": vm.moneyIn};
        vm.incomeArray.push(vm.newObject);
        vm.description = " ";
    }

}
