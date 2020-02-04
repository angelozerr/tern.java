/**
 * Read '_metadata-repository.json'
 * and replace every entry with new by reading the latest info from `metadataurl` (if present). 
 * If there is no `metadataurl` in the new entry, then keep older value
 * (This allows an older plugin to redirect to new location).
 * '_metadata-repository.json' file is only saved if and when all requested json files are received and parsed. 
 * 
 * before running do `npm i request`
 * that will be install into ../node_modules
 * 
 * @author Paul Verest 
 */

var repositoryFile = '_metadata-repository.json';

var fs = require('fs');
var request = require('request');

var ternRepository = require('./'+repositoryFile);

var counter = 0;
var requestCount = 0;
var responseCount = 0;

var requestedAllEntries = false;

var saveRepositoryJsonFile = function(){
	console.log(''+requestCount+' requests, '+responseCount+' responses');
	if (!requestedAllEntries){
		// unlikely situation when some response comes before cycle finishes
		return;
	}
	if (requestCount > responseCount){
		// not all responses yet came
		return;
	}
	
	fs.writeFileSync('./'+repositoryFile, JSON.stringify(ternRepository,null,2) );
	console.log('Finished processing '+counter+' entries. '+repositoryFile+' file is updated.');
};

for (var i in ternRepository){
	var entry = ternRepository[i];
	counter++;
	console.log(entry);
	
	if (!entry.metadataurl){
		continue;
	}
		
	(function closure(i, metadataurl) { //closure
		requestCount++;
		request.get(entry.metadataurl, function onResponse(error, response, body) {
		    if (!error && response.statusCode == 200) {
		    	console.log('updating entry '+i+' with');
		    	console.log(body);
		    	var entry = JSON.parse(body);
		    	if (!entry.metadataurl){
		    		entry.metadataurl = metadataurl;		    		
		    	}
		    	ternRepository[i] = entry;
		    	responseCount++;
		    	saveRepositoryJsonFile(); 
		    	// we don't know what response will come the last
		    	// at that point we are to save file
		    }
		});
	})(i, entry.metadataurl);
};

requestedAllEntries = true;
saveRepositoryJsonFile();
