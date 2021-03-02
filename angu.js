// api link -->https://covid.mathdro.id/api

const URL = "https://covid.mathdro.id/api"


// lets create app first all the app data wii be refledtec within the body we can  create any number of apps
let app = angular.module('MyApp', [])

// lets create the cntoller for your app so that you can control any value on it
app.controller("Myctrl", ($scope, $http) => {
    $scope.title = "stay home stay safe corona 2.0"

    // calling usrl
    $http.get(URL).then((response) => {
        // success
        console.log("i am from success group");
        // console.log(response.data);
        $scope.all_data = response.data;
    },
        (error) => {
            // console.error('error')
            console.log('something')
            console.log(error);
            // error code

        });
    // get country data
    $scope.get_c_data = () => {

        let country = $scope.c;


        // console.log(country);
        if (country == "") {

            $scope.c_data = undefined;
            return;

        }

        $http.get(`${URL}/countries/${country}`).then((response) => {
            // console.log($scope.c);
            console.log(response.data);
            $scope.c_data = response.data;
        },
            (error) => {
                // error
                // alert('fail')
                console.log(error);
            })

    }
});