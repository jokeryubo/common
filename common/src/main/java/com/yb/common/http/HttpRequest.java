package com.yb.common.http;

import android.content.Context;
import android.text.TextUtils;

import com.alibaba.fastjson.JSON;
import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.NoHttp;
import com.yanzhenjie.nohttp.RequestMethod;
import com.yanzhenjie.nohttp.rest.OnResponseListener;
import com.yanzhenjie.nohttp.rest.Request;
import com.yanzhenjie.nohttp.rest.RequestQueue;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.common.UIHelper;

import org.json.JSONObject;

import java.io.File;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * create by yubo on 2019/03/05
 */
public class HttpRequest {
    public static final String BASE_URL = "http://gateway.meiweigx.com";
    private static final String BASE_URL_FRONT = "/api/app/client";
    private static final String TAG = "HttpRequest";
    private static HttpRequest mHttpRequest;
    private  RequestResult mRequestResult;
    private Context mContext;
    public static HttpRequest getInstance(){

        if (mHttpRequest == null){
            mHttpRequest = new HttpRequest();
        }
        return mHttpRequest;
    }

    public void setContext(Context context) {
        mContext = context;
    }


    RequestQueue queue;
    public   void requestData(Request<JSONObject> request ,int what){
       if (queue == null){
           queue = NoHttp.newRequestQueue();
       }
        queue.add(what, request, mResponseListener);
    }

    private OnResponseListener<JSONObject> mResponseListener = new OnResponseListener<JSONObject>(){

        @Override
        public void onSucceed(int what, Response<JSONObject> response) {
            Logger.d("response:" + response.get());
            try {
                JSONObject jsonObject = response.get();
                if (jsonObject.getInt("code") == 0) {


                    if (mRequestResult != null) {
                        mRequestResult.onSucceed(what, response);
                    }

                }else {
                    if (mRequestResult != null) {
                        mRequestResult.onFailed(what, response);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                if (mRequestResult != null) {
                    mRequestResult.onFailed(what, response);
                }
            }
        }

        @Override
        public void onFailed(int what, Response<JSONObject> response) {

            // 这里还有很多错误类型，可以看demo： https://github.com/yanzhenjie/NoHttp
            if (response.get() != null) {
                Logger.d("response:"+response.get().optInt("code"));
            }
            if (mRequestResult != null){
                mRequestResult.onFailed(what,  response);
            }
        }

        @Override
        public void onStart(int what) {
            // 这里可以show()一个wait dialog。
            Logger.d("mContext:"+mContext);
            if (mContext != null){
                UIHelper.showDialogForLoading(mContext);
            }

        }

        @Override
        public void onFinish(int what) {
            // 这里可以dismiss()上面show()的wait dialog。
            UIHelper.hideLoading();
            if (mRequestResult != null){
                mRequestResult.onFinish(what);
            }
        }
    };


    public void setRequestResult(RequestResult requestResult) {
        mRequestResult = requestResult;
    }
    public void cancleAllRequest(){
        if (queue != null)
        queue.cancelAll();
    }
}
