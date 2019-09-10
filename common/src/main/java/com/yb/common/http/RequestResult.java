package com.yb.common.http;

import com.yanzhenjie.nohttp.rest.Response;

import org.json.JSONObject;

/*
 * create by yubo on 2019/03/06
 */
public interface RequestResult {
    void onSucceed(int what, Response<JSONObject> response);
    void onFailed(int what, Response<JSONObject> response);
    void onFinish(int what);
}
