


let javascript = {
    'language': 'Javscript',
    'libraries': ['React', 'Vue', 'Angular'],
    'printLibraries': function() {
        this.libraries.forEach(function(a) {
            console.log(`${this.language} loves ${a}`);
        });
    }
};


javascript.printLibraries();

/* 

output:

undefined loves React
undefined loves Vue
undefined loves Angular


*/