/**
 * Created by Von on 12/17/2015.
 */
describe('filter', function(){
    beforeEach(module('myApp'));

    describe('reverse', function(){
        it('should reverse a string', inject(function (reverseFilter){
            expect(reverseFilter('ABCD')).toEqual('DCBA');
        }))
    })
})