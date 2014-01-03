JSonUtil = {
    
save: function( fileName, data , saveSuccess, saveError){
    
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
                             
                             fileSystem.root.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
                                                     
                                                     fileEntry.createWriter(function(writer){
                                                                            
                                                                            writer.write(data);
                                                                            
                                                                            saveSuccess();
                                                                            
                                                                            }, saveError);
                                                     }, saveError);
                             }, saveError);
    
},
    
	create: function( fileName, data , saveSuccess, saveError){
		
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
	        
	    	fileSystem.root.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

	    		fileEntry.createWriter(function(writer){
		    		
	    	        writer.write(data);
                                       writer.abort();

	    	        saveSuccess();
		        	
	    		}, saveError);
	        }, saveError);
	    }, saveError);
		
    },
	read: function( fileName, readSuccess, readError){

		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
	        
	    	fileSystem.root.getFile(fileName, {create: false, exclusive: false}, function(fileEntry) {
                                    
                                    
	    		fileEntry.file(function(file){

                    var reader = new FileReader();
	    			reader.onloadend = function(evt) {

                        readSuccess(JSON.parse(evt.target.result));
    		        };
	    			reader.readAsText(file);
		        	
	    		}, readError);
	        }, readError);
	    }, readError);
		
    },
	exists: function( fileName, existsYes, existsNo, existsError){

        try{
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
	    	fileSystem.root.getFile(fileName, {create: false, exclusive: false}, function(fileEntry) {
    	    		existsYes();
	        }, existsNo);
	    }, existsError);
		}catch(e){
            alert(e.message);
        }
    }
    
    
}