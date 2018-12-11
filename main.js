let app = new Vue({
    el: "#app",
    data : {
        message : "Hello World",
        seen : true,
        link : {
            name : "google",
            url  : "https://www.google.com"
        }
    },
    methods : {
        change: function ()  {this.seen = (!this.seen);
        console.log(this.seen);
        }
    }
})


setInterval(() => {
    app.link.name = "facebook",
    app.link.url  = "https://www.facebook.com";
}, 3000)
