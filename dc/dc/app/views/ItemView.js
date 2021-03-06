templates.itemView = "app/views/ItemView.html";
templates.itemViewExtend = "app/views/ItemViewExtend.html";

window.ItemView = Backbone.View.extend({

    template:undefined,
    backLabel: "Volver",
    title:"",

    initialize: function(options) {

//        this.model = options.model;
        this.model = options;

        this.title = options.labelSingular;

        if (options.model.type==ModelManager.type.hotel.code) {
            this.template = _.template( templates.itemViewExtend );
        } else {
            this.template = _.template( templates.itemView );
        };
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btn-language-es":"changeLanguageSpanish",
        "click #btn-language-en":"changeLanguageEnglish"
    },

    changeLanguageSpanish:function () {
    	App.setLanguageSpanish();
    	this.reload();
    },

    changeLanguageEnglish:function () {
    	App.setLanguageEnglish();
    	this.reload();
    },

    reload:function () {
        var view = new LoadItemView({model:this.model.model, labelSingular:this.title});
        window.ViewNavigatorUtil.replaceView( view );
    },

    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));
//        this.$el.css("background", "white");

        return this;
    }
});