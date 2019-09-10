package com.yb.common.base;

import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;

import com.gyf.barlibrary.ImmersionBar;
import com.yanzhenjie.nohttp.error.NetworkError;
import com.yanzhenjie.nohttp.error.TimeoutError;
import com.yanzhenjie.nohttp.error.URLError;
import com.yanzhenjie.nohttp.error.UnKnownHostError;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.R;
import com.yb.common.common.UIHelper;
import com.yb.common.common.Utils;
import com.yb.common.http.HttpRequest;
import com.yb.common.http.RequestResult;

import org.json.JSONObject;

public abstract class BaseActivity extends AppCompatActivity implements RequestResult {
    @Override
    public void setContentView(int layoutResID) {
        super.setContentView(layoutResID);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        setStatusBar();

    }
    protected void setStatusBar() {
//        StatusBarUtil.setColor(this, getResources().getColor(R.color.color_white));
        ImmersionBar.with(this)
                .statusBarColor(R.color.color_white)
                .statusBarDarkFont(true)
                 .fitsSystemWindows(true)
                .init();
        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }
    }

    @Override
    public void onSucceed(int what, Response<JSONObject> response) {

    }

    @Override
    public void onFailed(int what, Response<JSONObject> response) {
        if (response.getException() != null) {
            Exception exception = response.getException();
            if (exception instanceof NetworkError) {// 网络不好
                Utils.Toast(this,"网络异常");
            } else if (exception instanceof TimeoutError) {// 请求超时
                Utils.Toast(this,"请求超时");
            } else if (exception instanceof UnKnownHostError) {// 找不到服务器
                Utils.Toast(this,"找不到服务器");
            } else if (exception instanceof URLError) {// URL是错的
                Utils.Toast(this,"URL错误");
            } else {
                Utils.Toast(this,"未知错误");
            }
        }
        if (response.get() != null) {
            if (TextUtils.isEmpty(response.get().optString("msg"))) {
                Utils.Toast(this, "网络异常");
            } else {
                Utils.Toast(this, response.get().optString("msg"));
            }
        }
    }
    @Override
    public void onFinish(int what) {
        UIHelper.hideLoading();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ImmersionBar.with(this).destroy();
    }

    @Override
    protected void onResume() {
        super.onResume();
        HttpRequest.getInstance().setRequestResult(this);
        HttpRequest.getInstance().setContext(this);
    }

    @Override
    public Resources getResources() {
        Resources resources = super.getResources();
        Configuration configuration = new Configuration();
        configuration.setToDefaults();
        resources.updateConfiguration(configuration, resources.getDisplayMetrics());
        return resources;
    }
}
