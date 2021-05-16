let app = new Vue({
    el: '#app',
    data: {
        img: ""
    },
    methods: {
        addImg: function () {
            axios.get('https://avatars.dicebear.com/api/female/:seed.svg').then((response) => {
                this.img=response.config.url;
            }).catch();
        }
    }
    
});

