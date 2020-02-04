/**
 * Look inside current `metadata` folder for `*.metadata.json` files
 * and list them inside `_metadata-repository.json`
 * as `name` and `metadataurl` pairs
 */

var folderUrl = 'https://raw.githubusercontent.com/angelozerr/tern.java/master/core/tern.core/metadata/';
var suffix = '.metadata.json';
var repositoryFile = '_metadata-repository.json';

var fs = require('fs');

var ternRepository = [];

var filenames = fs.readdirSync('.');

var counter = 0;

for (var i in filenames){
	var file = filenames[i];
	// skip if not endsWith '.metadata.json'
	if (file.indexOf(suffix, file.length - suffix.length) == -1){
		continue;
	}
	counter++;
	//console.log(file);
	
	var metadata = require ('./'+file);
	//console.log(metadata);
	var entry = {};
	entry.name = metadata.name;
	entry.metadataurl = folderUrl+file;
	ternRepository.push(entry);
};

//console.log(ternRepository);

fs.writeFileSync('./'+repositoryFile, JSON.stringify(ternRepository,null,2) );

console.log('Finished processing '+counter+' entries. Check '+repositoryFile+' file');
