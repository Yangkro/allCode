$(function(){
    // 全选功能模块
    $(".checkall").change(function(){
        // 当前的全选框的状态
        var status = $(this).prop("checked");
        // 将这个状态给下面的选择框
        $(".j-checkbox, .checkall").prop("checked", status);
        if(status){
            $(".cart-item").addClass("check-cart-item");
        }else {
            $(".cart-item").removeClass("check-cart-item");
        }
        getSun();
    });
    // 如果商品选择按钮全部选中，则全选按钮也选中，否则不选中
    $(".j-checkbox").change(function(){
        if($(".j-checkbox:checked").length === $(".j-checkbox").length){
            $(".checkall").prop("checked", true);
        }else {
            $(".checkall").prop("checked", false);
        }
        //为选中的商品添加背景颜色
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else {
            // 没有选中不添加样式背景
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSun();
    });
    // 商品计数模块
    // 增加
    $(".increment").click(function(){
        // 获取当前数量
        var num = $(this).siblings("input").val();
        num ++;
        $(this).siblings("input").val(num);
        // 单个商品总价变化
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * num).toFixed(2));
        getSun();
    });
    // 减少
    $(".decrement").click(function(){
        // 获取当前数量
        var num = $(this).siblings("input").val();
        if(num == 1){
            return false;
        }
        num --;
        console.log(num)
        $(this).siblings("input").val(num);
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * num).toFixed(2));
        getSun();
    });
    // 用户直接修改文本框中的值，单个商品的总价发生变化
    $(".itxt").change(function(){
        var num = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * num).toFixed(2));
        getSun();
    });
    getSun();
    // 定义一个求商品总数量和总价钱的函数
    function getSun(){
        let count = 0; //定义商品的总数量
        let money = 0; //定义商品的总价格
        $(".itxt").each(function(i, ele){
        if($(ele).parents(".p-num").siblings(".p-checkbox").children(".j-checkbox").prop("checked")){
            count += parseInt($(ele).val());
        }    
        });
        $(".amount-sum em").text(count); 
        // 设置总价格
        $(".p-sum").each(function(i, ele){
            if($(ele).siblings(".p-checkbox").children(".j-checkbox").prop("checked")){
                money = money + parseFloat($(ele).text().substr(1));
            }
        });
        $(".price-sum em").text("￥"+money.toFixed(2));
    };

    // 删除商品按钮
    $(".p-action a").click(function(){
        $(this).parents(".cart-item").remove();
        getSun();
    });
    // 删除选中的商品
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSun();
    });
    // 清空购物车
    $(".clear-all").click(function(){
        $(".cart-item").remove();//隐式迭代
        getSun();
    });
})