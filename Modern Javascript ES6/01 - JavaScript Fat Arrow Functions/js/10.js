


let javascript = {
    'language': 'Javscript',
    'libraries': ['React', 'Vue', 'Angular'],
    'printLibraries': function() {
        var self = this.language;
        this.libraries.forEach(function(a) {
            console.log(`${self} loves ${a}`);
        });
    }
};


javascript.printLibraries();