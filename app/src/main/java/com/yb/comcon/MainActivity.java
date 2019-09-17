package com.yb.comcon;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;
import com.tbruyelle.rxpermissions2.RxPermissions;
import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.base.BaseActivity;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class MainActivity extends BaseActivity {
    private WebView mWebView;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        NohttpRequest.getAssemblelist("成都市",1);
        mWebView = findViewById(R.id.webview);
        // 加载 asset 文件
//        String tpl = getFromAssets("index.html");
//        mWebView.loadDataWithBaseURL(null, tpl, "text/html", "utf-8", null);
        WebSettings webSettings = mWebView.getSettings();

        // 设置与Js交互的权限
        webSettings.setJavaScriptEnabled(true);
        // 设置允许JS弹窗
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setAppCacheEnabled(false);
        webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        webSettings.setTextZoom(100);
        webSettings.setBlockNetworkImage(false);
        // 加载 asset 文件
//        String tpl = getFromAssets("index.html");
//        new Handler().postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                mWebView.loadDataWithBaseURL(null, tpl, "text/html", "utf-8", null);
//            }
//        },2000);


        mWebView.loadUrl("file:///android_asset/index.html");
        mWebView.addJavascriptInterface(new AndroidtoJs(), "takePhoto");//AndroidtoJS类对象映射到js的test对象
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);

            }
                // 重写shouldOverrideUrlLoading方法，使点击链接后不使用其他的浏览器打开。
                @Override
                public boolean shouldOverrideUrlLoading(WebView view, String url) {
                    view.loadUrl(url);
                    // 如果不需要其他对点击链接事件的处理返回true，否则返回false
                    return true;
                }
        });

//        mWebView.loadUrl("https://www.baidu.com/");
        RxPermissions rxPermissions = new RxPermissions(this);
        rxPermissions.request(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                .subscribe(granted -> { // will emit 2 Permission objects
//                    if (granted) {
//                        presenter.bindServices();
//                    } else {
//                        Utils.Toast("请开启权限");
//                        Utils.saveChangeAddrLocationInfo(104.069951,30.552364,"四川省成都市武侯区","成都市");
//                        Utils.saveLocationInfo(104.069951,30.552364,"四川省成都市武侯区","成都市");
//                    }
                });
    }
    @Override
    public void onSucceed(int what, Response<JSONObject> response) {
        Logger.d(response.get());
    }

    /*
     * 获取html文件
     */
    public String getFromAssets(String fileName) {
        try {
            InputStreamReader inputReader = new InputStreamReader(
                    getResources().getAssets().open(fileName));
            BufferedReader bufReader = new BufferedReader(inputReader);
            String line = "";
            String Result = "";
            while ((line = bufReader.readLine()) != null)
                Result += line;
            return Result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }
    public class AndroidtoJs extends Object {
        @JavascriptInterface
        public void startNewWeb(String info) {
            com.alibaba.fastjson.JSONObject jsonObject = JSON.parseObject(info);

            String addr = jsonObject.getString("Url");
            String data = jsonObject.getString("data");
            String nativestr = jsonObject.getString("nativeId");
            /*if (addr.equals("商铺转让")) {
                startActivity(new Intent(getActivity(), TransferShopTrendsActivity.class));
            } else if (addr.equals("装修")) {
                startActivity(new Intent(getActivity(), RenvoationInfoActivity.class));
            } else*/ if (addr.equals("拼团详情")) {
                Intent intent = new Intent();
                intent.putExtra("assembleId", jsonObject.getJSONObject("data").getJSONObject("data").getString("id"));
                intent.setAction("com.kk.assemble");
                startActivity(intent);
            } else if (addr.equals("商铺转让编辑")) {
//                Intent intent = new Intent();
//                intent.putExtra("assembleId", jsonObject.getJSONObject("data").getJSONObject("data").getString("id"));
//                intent.setAction("com.kk.assemble");
//                startActivity(intent);
            } else if (addr.equals("装修详情")) {
//                startActivity(new Intent(getActivity(), RenvoationCompanyDetailActivity.class)
//                        .putExtra("serviceProviderId", Long.valueOf(nativestr)));
            } else {
                startActivity(new Intent(MainActivity.this, WebViewActivity.class)
                        .putExtra("extraInfo", data)
                        .putExtra(WebViewActivity.WEBVIEW_URL, addr));
            }

        }

        @JavascriptInterface
        public void toLogin(String str) {
//            Utils.startToLogin();
        }

        @JavascriptInterface
        public void changeCity() {
//            Utils.startChangeLocation(getActivity(), false);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWebView != null) {
            // 如果先调用destroy()方法，则会命中if (isDestroyed()) return;这一行代码，需要先onDetachedFromWindow()，再
            // destory()
            ViewParent parent = mWebView.getParent();
            if (parent != null) {
                ((ViewGroup) parent).removeView(mWebView);
            }

            mWebView.stopLoading();
            // 退出时调用此方法，移除绑定的服务，否则某些特定系统会报错
            mWebView.getSettings().setJavaScriptEnabled(false);
            mWebView.clearHistory();
            mWebView.clearView();
            mWebView.removeAllViews();

            try {
                mWebView.destroy();
            } catch (Throwable ex) {

            }
        }
    }
}
