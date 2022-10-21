var vm = new Vue({
    el: '#vue_app',
    data: {
        bg_desc: ""
    },
    methods:{
        getArticles:function() {
            //发送get请求
            this.$http.get('https://bing.biturl.top/').then(function(res){
                vm.bg_desc = res.body.copyright;
            },function(){
                console.log('Fail');
            });
        },
    },
    mounted(){
        this.getArticles()
    }
})