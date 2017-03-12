angular.module('BudgetApp')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;
    vm.totalIncome = 0;
    vm.totalExpense = 0;
    vm.moneyLeft = 0;

    vm.incomeArray = [];
    vm.incomeClick = function incomeClick() {
        vm.newObject = { "incomeDescription": vm.incomeDescription, "moneyIn": vm.moneyIn };
        vm.incomeArray.push(vm.newObject);
        vm.totalIncome = vm.calculateTotalIncome();
        vm.calculateMoneyLeft();

    }

    vm.expenseArray = [];
    vm.expenseClick = function expenseClick() {
        vm.expenseObject = { "expenseDescription": vm.expenseDescription, "moneyOut": vm.moneyOut };
        vm.expenseArray.push(vm.expenseObject);
        vm.totalExpense = vm.calculateTotalExpense();
        vm.calculateMoneyLeft();
    }
    vm.calculateTotalIncome = function calculateTotalIncome() {
        vm.total = 0;
        for (var i = 0; i < vm.incomeArray.length; i++) {
            vm.total += vm.incomeArray[i].moneyIn;
        }

        return vm.total;
    }
    vm.calculateTotalExpense = function calculateTotalExpense() {
        vm.total = 0;
        for (var i = 0; i < vm.expenseArray.length; i++) {
            vm.total += vm.expenseArray[i].moneyOut;
        }
        return vm.total;
    }
    vm.calculateMoneyLeft = function calculateMoneyLeft() {
    vm.moneyLeft = vm.totalIncome - vm.totalExpense;
}

}
