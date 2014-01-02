window.App = {

	isEnvironmentWeb:function(){
		return true;
	},

	adScreenToShow:0,

	language:"",

	translate:function(object, key){
		return object[key + App.language];
	},

	setLanguageEnglish:function(){
		App.language = "-en";
	},

	setLanguageSpanish:function(){
		App.language = "";
	},

	setLanguageDefault:function(){
		App.setLanguageSpanish();
	},

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