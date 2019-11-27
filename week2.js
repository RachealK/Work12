console.log('Enter year of birth.');
process.stdin.setEncoding('utf8');

var name;

process.stdin.on(
    'readable', function(){
        name  = process.stdin.read();
        if (name !== null){

            var yr1 = parseInt(name);
            var cyr1 = new Date().getFullYear();

            var age = cyr1 - yr1;

            if (age < 18){
                console.log("\n\n  This is a minor")
            }
            else if (age > 36){
                console.log("\n\n  You are a elderly")
            } else {
                console.log("\n\n  You are youth")
            }
            
            process.exit();

        }
    }
);



