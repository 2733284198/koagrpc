var grpc = require('grpc');
var PROTO_PATH = './proto/helloworld.proto';

var proto = grpc.load(PROTO_PATH).helloworld;
var client = new proto.Greeter('0.0.0.0:50052', grpc.credentials.createInsecure());

function SayHello(params) {
    return new Promise(function(resolve, reject) {
        console.log('start get data...');
        client.sayHello(params, function(err, response) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    });
}

exports.SayHello = SayHello;