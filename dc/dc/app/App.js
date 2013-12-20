

window.App = {

	isEnvironmentWeb:function(){
		return true;
	}
	,
	adScreenToShow:0
	,
	getNextAdScreen:function(loadSuccess, loadError){
		ModelManager.getAll(ModelManager.type.adScreen.code, 
			function(result){
				if(App.adScreenToShow >= result.items.length) App.adScreenToShow = 0;
				loadSuccess(result.items[App.adScreenToShow++]);
			}, loadError);
	}
	,
	getImagePath:function(type, fileName){
		// TODO modificar
		return "assets/model/adScreen/"+fileName;
	}
};
