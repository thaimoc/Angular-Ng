/**
 * Created by Von on 1/14/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', [
            'ngSanitize',
            'ngLocalize',
            'ngLocalize.Config',
            'ngLocalize.InstalledLanguages'
        ])
        .value('localeConf', {
            basePath: 'languages',
            defaultLocale: 'en-Us',
            sharedDictionary: 'common',
            fileExtension: '.lang.json',
            observableAttrs: new RegExp('^data-(?!ng-|i18n)')
        })
        .value('localeSupported', [
            'en-US',
            'es-MX',
            'sv-SE'
        ])

}(window.angular));