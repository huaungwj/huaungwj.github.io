(function($){
    var MyApp = {
        initPjax: function(){
            var self = this;
            // 初始化
            $(document).pjax('a[target!="_blank"]', '#pjax-container', {
            	fragment: "#pjax-container",
            	timeout: 5000
            });
            // pjax请求开始
            $(document).on('pjax:start', function () {

            });
            // PJAX 渲染结束时
            $(document).on('pjax:end', function() {
                self.siteBootUp();
                //在「局部刷新」时才会运行
                console.log("局部执行");
            });
            self.siteBootUp();
        },
        /*
        * Things to be execute when normal page load
        * and pjax page load.
        */
        siteBootUp: function(){
            //「局部刷新」和「页面刷新」都需要运行的代码
            console.log("全局执行");
        }
    };
    window.MyApp = MyApp;
})(jQuery);

//「页面刷新」事件触发运行
$(document).ready(function() {
    MyApp.initPjax();
});