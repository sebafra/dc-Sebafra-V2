templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Jes&uacute;s Mar&iacute;a en tu mano",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click .back1":"loadAttractions",
        "click .back2":"loadOtherEvents",
        "click .back4":"loadHotels",
        "click .back5":"loadService",
        "click .back6":"loadFestival"
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));


        return this;
    },

    loadAttractions:function () {
        var view = new LoadItemsView({type:ModelManager.type.attraction.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadHotels:function () {
    	var view = new LoadItemsView({type:ModelManager.type.hotel.code});
    	//window.viewNavigator.pushView( view );
    	ViewNavigatorUtil.pushView( view );
    },
    loadOtherEvents:function () {
        var view = new LoadItemsView({type:ModelManager.type.otherEvent.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadService:function () {
        var view = new LoadItemsView({type:ModelManager.type.service.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    },
    loadFestival:function () {
        var view = new LoadItemsView({type:ModelManager.type.festival.code});
        //window.viewNavigator.pushView( view );
        ViewNavigatorUtil.pushView( view );
    }
});