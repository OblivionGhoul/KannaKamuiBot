var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;

var oneLinerJoke = require('../index.js');


describe('One Liner Joke Testing', function () {
    it('Should return a valid random Joke', function (done) {
        this.timeout(10000);

        var randomJoke = oneLinerJoke.getRandomJoke();

        try{
            expect(randomJoke).to.be.an('object');
            assert.isDefined(randomJoke);
            assert.isNotNull(randomJoke);
            assert.isObject(randomJoke);
            assert.property(randomJoke, 'body');
            assert.property(randomJoke, 'tags');
            expect(randomJoke.tags).to.be.an('array');
            done();
        }catch(e){
            done(e);
        }
    });

    it('Should return a valid random Joke with a tag', function (done) {
        this.timeout(10000);

        var randomJoke = oneLinerJoke.getRandomJokeWithTag('life');
        try{
            expect(randomJoke).to.be.an('object');
            assert.isDefined(randomJoke);
            assert.isNotNull(randomJoke);
            assert.isObject(randomJoke);
            assert.property(randomJoke, 'body');
            assert.property(randomJoke, 'tags');
            expect(randomJoke.tags).to.be.an('array');
            expect(randomJoke.tags).to.contain('life');
            done();
        }catch(e){
            done(e);
        }
    });

});