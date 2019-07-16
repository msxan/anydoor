var mapMath =['SHEJIFANGLIANG','XIGULIAO1_LILUNZHI','XIGULIAO2_SHIJIZHI','XIGULIAO2_LILNZHI'];
var mapDate =['CHULIAOSHIJIAN','BAOCUNSHIJIAN','XIGULIAO1_SHIJIZHI'];
var flowFile =[{"ID":"21062288","SHEBEIBIANHAO":"ZBTJ-1-1","GONGDANHAO":"0","CHAOZUOZHE":"管理员","SHEJIFANGLIANG":"","GUJIFANGSHU":"4796.82","XIGULIAO1_SHIJIZHI":"1814.0","XIGULIAO1_LILUNZHI":"1810.0","XIGULIAO2_SHIJIZHI":"","XIGULIAO2_LILNZHI":"","CUGULIAO1_SHIJIZHI":"712.0","CUGULIAO1_LILUNZHI":"722.0","CUGULIAO2_SHIJIZHI":"1340.0","CUGULIAO2_LILUNZHI":"1340.0","CUGULIAO3_SHIJIZHI":"0.0","CUGULIAO3_LILUNZHI":"0.0","SHUINI1_SHIJIZHI":"664","SHUINI1_LILUNZHI":"664","SHUINI2_SHIJIZHI":"0","SHUINI2_LILUNZHI":"0","KUANGFEN3_SHIJIZHI":"","KUANGFEN3_LILUNZHI":"","FENMEIHUI4_SHIJIZHI":"119.0","FENMEIHUI4_LILUNZHI":"118.0","FENLIAO5_SHIJIZHI":"","FENLIAO5_LILUNZHI":"","FENLIAO6_SHIJIZHI":"","FENLIAO6_LILUNZHI":"","SHUI1_SHIJIZHI":"140.0","SHUI1_LILUNZHI":"140.0","SHUI2_SHIJIZHI":"","SHUI2_LILUNZHI":"","WAIJIAJI1_SHIJIZHI":"7.82","WAIJIAJI1_LILUNZHI":"7.82","WAIJIAJI2_SHIJIZHI":"0","WAIJIAJI2_LILUNZHI":"0","WAIJIAJI3_SHIJIZHI":"","WAIJIAJI3_LILUNZHI":"","WAIJIAJI4_SHIJIZHI":"","WAIJIAJI4_LILUNZHI":"","CHULIAOSHIJIAN":"2019-06-26 15:39:09","GONGCHENGMINGMHENG":"G0611张掖至汶川国家高速公路张掖至扁都口段公路_1标段","SIGONGDIDIAN":"","JIAOZUOBUWEI":"AK0+134 党寨互通A匝道1#桥2#桩接桩","SHUINIPINGZHONG":"","PEIFANGHAO":"C35","QIANGDUDENGJI":"C35","JIAOBANSHIJIAN":"48","BAOCUNSHIJIAN":"2019-06-26 15:39:09","KEHUDUANBIANHAO":"ZBTJ-1-1","GETTIME":"2019/6/26 15:47:41","UKEY":"ZBTJ-1-1-22152","ISQUALIFIED":"1","PLINKCODE":"ZBGS20181030172530","SLINKCODE":"ZBGS42720181030172530"}]
if(flowFile==null){
    console.log("FAILURE");
}
for(var attrKey in flowFile){
    for (var json in flowFile[attrKey]) {
        if(mapMath.includes(json)){
            var math = flowFile[attrKey][json];
            // flowFile=session.putAllAttributes();
            if(judge(math)){
                console.log("success");
            }else{
                console.log("FAILURE");
            }
        }else if(mapDate.includes(json)){
            var date = flowFile[attrKey][json];
            if(isDate(date)){
                console.log("success");
            }else{
                console.log("FAILURE");
            }
        }else{
            console.log("success");
        }
    }
}
function  judge(math){
    if(!isNaN(math)) {
        return  true;
    }else{
        // flowFile=session.putAllAttributes(flowfile,'errorMath',math);
        return  false;
    }
}
function isDate(date){
    // var regPos ='^(\\d{4})-(0\\d{1}|1[0-2])-(0\\d{1}|[1-2]\\d{1}|3[0-1]) (0\\d{1}|1\\d{1}|2[0-3]):[0-5]\\d{1}:([0-5]\\d{1})$';
    if(true){
        return  true;
    }else{
        // flowFile=session.putAllAttributes(flowfile,'errorDate',date);
        return  false;
    }
}