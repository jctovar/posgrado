angular.module('main.auth', ['ngResource'])

.factory("auth", function($location, login) {
    return{
        login : function(username, password)
        {
            var query = login.get({ id: username, password:  password }, function () {
                if (query.login[0] && query.login[0].account_email) {
                    //$cookies.put('data','1');
                    sessionStorage.email = query.login[0].account_email;
                    sessionStorage.id = query.login[0].account_id;
                    sessionStorage.firstname = query.login[0].account_firstname;
                    sessionStorage.lastname = query.login[0].account_lastname;
                    //mandamos al dashboard
                    $location.path("/dashboard");
                } else {
                    console.log('error, not found');
                    $location.path("/login");
                }
            });
              
        },
        logout : function()
        {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            sessionStorage.clear();
            //mandamos al login
            $location.path("/");
        },
        checkStatus : function()
        {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/dashboard","/profile","/password","/requests","/bank"];
            console.log('path; ' + $location.path());
            if(this.in_array($location.path(),rutasPrivadas) && typeof(sessionStorage.id) == "undefined")
            {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array($location.path(),["/login"]) && typeof(sessionStorage.id) != "undefined")
            {
                $location.path("/dashboard");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
});