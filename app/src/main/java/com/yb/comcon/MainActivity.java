package com.yb.comcon;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.base.BaseActivity;

import org.json.JSONObject;

public class MainActivity extends BaseActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        NohttpRequest.getAssemblelist("成都市",1);
    }

    @Override
    public void onSucceed(int what, Response<JSONObject> response) {
        Logger.d(response.get());
    }
}
