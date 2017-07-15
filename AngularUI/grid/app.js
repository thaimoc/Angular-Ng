angular.module('MyApp', ['ngGrid'])
    .controller('MainController', function ($scope) {

        $scope.superheroes = [
            { other: 10, firstName: 'Tony', lastName: 'Stark', alterEgo: 'Iron Man' },
            { other: 20, firstName: 'Steve', lastName: 'Rogers', alterEgo: 'Captain America' },
            { other: 30, firstName: 'Natasha', lastName: 'Romanoff', alterEgo: 'Black Widow' },
            { other: 40, firstName: 'Bruce', lastName: 'Banner', alterEgo: 'Hulk' },
            { other: 50, firstName: 'Clint', lastName: 'Barton', alterEgo: 'Hawkeye' },
            { other: 60, firstName: 'Thor', lastName: 'Odinson', alterEgo: 'Thor' },
        ];

        $scope.selected = [];
        
        $scope.gridOpts = {
            data: 'superheroes',
            //showGroupPanel: true,
            selectedItems: $scope.selected,
            multiSelect: true,
            showSelectionCheckbox: true,
            selectWithCheckboxOnly: true,
            enableCellEdit: true,
            enableCellSelection: true,
            showColumnMenu: true,
            showFooter: true,

            enablePaging: true,
            pagingOptions: {
                // pageSizes: list of available page sizes.
                pageSizes: [5, 10, 25],
                //pageSize: currently selected page size.
                pageSize: 5,
                //currentPage: the uhm... current page.
                currentPage: 1
            },

            columnDefs: [
                {
                    field: 'firstName',
                    displayName: 'First Name',
                    cellTemplate: '<button type="button" class="btn btn-link"><span class="glyphicon glyphicon-pencil"></span></button><a>{{COL_FIELD}}</a>'
                },
                {
                    field: 'lastName',
                    displayName: 'Last Name',
                    cellTemplate: '<button type="button" class="btn btn-link"><span class="glyphicon glyphicon-pencil"></span></button><a>{{COL_FIELD}}</a>'
                }
            ],

            showFilter: true,
            afterSelectionChange: function(rowItem){
                console.log(rowItem)
            }
        };
    });
