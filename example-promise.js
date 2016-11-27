function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found!');
  });
}

getTempPromise().then(function(temp){
  console.log(temp);
}, function(err){
  console.log(err);
});

getTempPromise().then(function(temp){
  console.log(temp);
}, function(err){
  console.log(err);
});
