var request=require('supertest')
var app=require('../index.js')

describe('Get /',function(){
    it('respond with hello world',function(done){
        request(app).get('/').expect('Hello World',done);
    })
})