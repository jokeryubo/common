package com.yb.comcon;

import com.yanzhenjie.nohttp.NoHttp;
import com.yanzhenjie.nohttp.RequestMethod;
import com.yanzhenjie.nohttp.rest.Request;
import com.yb.common.common.HttpUtils;
import com.yb.common.http.HttpRequest;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

/**
 * @author yubo
 * @description:
 * @date :2019/9/9 18:17
 */
public class NohttpRequest {

    /**
     * 装修拼团区-拼团列表
     * @param what
     */
    public static void getAssemblelist(String cityName, int what){
        String login ="/api/order/assemble/assemblelist";
        Map<String ,Object> map = new HashMap<>();
        Request<JSONObject> request = NoHttp.createJsonObjectRequest("http://192.192.192.60:8101"+login , RequestMethod.GET);

        request.add("cityName",cityName);
//        String jsonObject = JSON.toJSONString(map);
//        request.setDefineRequestBodyForJson(jsonObject);
        HttpUtils.addHeaders(request ,login , "");
        HttpRequest.getInstance().requestData(request ,what);
    }
}
