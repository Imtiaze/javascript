


let javascript = {
    'language': 'Javscript',
    'libraries': ['React', 'Vue', 'Angular'],
    'printLibraries': function() {
        
        this.libraries.forEach((a) => console.log(`${this.language} loves ${a}`));
    }
};


javascript.printLibraries();