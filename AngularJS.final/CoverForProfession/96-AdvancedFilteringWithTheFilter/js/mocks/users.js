/**
 * Created by Von on 12/27/2015.
 */
;(function(angular){
    'use strict';

    angular
        .module('app.users', [])
        .provider('users', function(){
            return {
                $get: function(){
                    return [
                        {
                            name: 'Yehuda Katz',
                            email: 'katz@gotyourtongue.com',
                            spent: '18.99',
                            joined: new Date('January 1, 2015')
                        },
                        {
                            name: 'DHH',
                            email: 'dhh@rails.net',
                            spent: '0.00',
                            joined: new Date('June 15, 2014')
                        },
                        {
                            name: 'Avdi Grimm',
                            email: 'avdi@gmail.com',
                            spent: '10.99',
                            joined: new Date('March 17, 2012')
                        },
                        {
                            name: 'Ryan Bates',
                            email: 'ryan@railscasts.com',
                            spent: '200.00',
                            joined: new Date('December 10, 2011')
                        },
                        {
                            name: 'Sandi Metz',
                            email: 'sandi@poodr.com',
                            spent: '18.99',
                            joined: new Date('May 11, 2010')
                        }
                    ];
                }
            }
        })

}(window.angular));