


let javascript = {
    'language': 'Javscript',
    'libraries': ['React', 'Vue', 'Angular'],
    'printLibraries': function() {
        this.libraries.forEach(function(a) {
            console.log(`${language} loves ${a}`);
        });
    }
};


javascript.printLibraries();