console.log('Enter the string.');
process.stdin.setEncoding('utf8');

var str;
var v1 = [];
var vv;

process.stdin.on(
    'readable', function(){
        str  = process.stdin.read();
        if (str !== null){

            var vowels = str.match(/[aeiou]/gi);

            function hmr(st){
    
            try{
               return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;
            }
            catch(e){
                return 0;
            }
        }

            v1.push(vowels.join(""));
            v1.push(hmr(str));
            console.log(v1);


            
            process.exit();

        }
    }
);



