$(function(){
   
    var points = {
            alpha : [],
            beta : [],
            delta : [],
            gamma : [],
            theta : []

        }, 
        types = ['alpha', 'beta', 'delta', 'gamma', 'theta'];


    Muse.connect({
      host: 'http://127.0.0.1',
      port: 8081,
      socket: {
        host: '127.0.0.1',
        ports: {
          client: 3334,
          server: 3333
        }
      }
    });


    /* Muse overrides */

    Muse.relative.brainwave = function(band, obj){
       var value = average(obj); 
           points[band].push(value);

    };

    /* Helpers */
    var average = function(arr){
        var length = arr.length,
            result = 0,
            num = 0,
            i;

        for (i = 1; i < length; i++){
            result += arr[i];
            num++;
        }

        return result/num;
    };

});