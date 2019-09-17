package com.yb.comcon;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.alibaba.fastjson.JSON;
import com.gyf.barlibrary.ImmersionBar;
import com.luck.picture.lib.PictureSelector;
import com.luck.picture.lib.entity.LocalMedia;
import com.tbruyelle.rxpermissions2.RxPermissions;
import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.base.BaseActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;


public class WebViewActivity extends BaseActivity {

    private static final int REQUEST_CODE_CHOOSE_QRCODE_FROM_GALLERY = 666;
    public static final String WEBVIEW_URL ="webview_url";
    @BindView(R.id.webview)
    WebView mWebView;
    @BindView(R.id.img)
    ImageView img;
    @BindView(R.id.refresh)
    TextView refresh;
    @BindView(R.id.ll_errView)
    LinearLayout llErrView;
    private String url;
    private String jsString;
    private String webViewBaseUrl;
    private String extraInfo;
    private boolean isLocation;
    private static final int REQUEST_CODE_CAMERA = 102;
    private String filePath;
    private String positionId;
    private AndroidtoJs mAndroidtoJs;
    private boolean loadErr;
    private boolean webLoadSucess;
    private JSONObject data;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);
        ButterKnife.bind(this);
        initWebView();
        initOCR();
    }

    private void initWebView() {
//        webViewBaseUrl = baseUrl + getIntent().getStringExtra(WEBVIEW_URL);
//        extraInfo = getIntent().getStringExtra("extraInfo");
//        Logger.e("webViewBaseUrl:" + webViewBaseUrl);
//        url = webViewBaseUrl
//                + "?token=" + PreferenceUtils.getToken() +
//                "&type=android&refreshToken="
//                + PreferenceUtils.getRefreshToken()
//                + "&version=" + Utils.getVerName()
//                + "&city=" + LocationPreferenceUtils.getPrefsStringValue(LocationPreferenceUtils.CITY_VALUE)
//                + "&lat=" + LocationPreferenceUtils.getPrefsStringValue(LocationPreferenceUtils.LATITUDE_VALUE)
//                + "&lon=" + LocationPreferenceUtils.getPrefsStringValue(LocationPreferenceUtils.LONGITUDE_VALUE)
//                + "&addr="
//                +"&TokenExpireDate="+PreferenceUtils.getTokenExpireDate()
//                +"&goServerType="+getIntent().getStringExtra("goServerType")
//        ;
        Logger.e("url:" + url);
        mWebView = findViewById(R.id.webview);
        WebSettings webSettings = mWebView.getSettings();

        // 设置与Js交互的权限
        webSettings.setJavaScriptEnabled(true);
        // 设置允许JS弹窗
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setAppCacheEnabled(false);
        webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        webSettings.setTextZoom(100);
        webSettings.setBlockNetworkImage(true);
        // 先载入JS代码
        // 格式规定为:file:///android_asset/文件名.html
        mAndroidtoJs = new AndroidtoJs();
        mWebView.addJavascriptInterface(mAndroidtoJs, "takePhoto");//AndroidtoJS类对象映射到js的test对象
        mWebView.loadUrl(url);

        Map<String, Object> map = new HashMap<>();

//        String userinfo = PreferenceUtils.getPrefsStringValue(Constants.USER_INFO, "", this);
//        map.put("type", "userinfo");
//        map.put("data", userinfo);
//        mWebView.setWebChromeClient(new WebChromeClient() {
//            @Override
//            public void onProgressChanged(WebView view, int newProgress) {
//                super.onProgressChanged(view, newProgress);
//                if (newProgress == 100) {
//                    webSettings.setBlockNetworkImage(false);
//                }
//            }
//        });
//        Glide.with(WebViewActivity.this).load(R.mipmap.loading_img).into(img);
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
//                if (!TextUtils.isEmpty(url) && hitTestResult == null) {
//                    return true;
//                }
                view.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
                view.loadUrl(url);
                Logger.d("url:" + url + " WebView:" + view.getUrl());
                return true;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
//                UIHelper.showDialogForLoading(WebViewActivity.this);
                mWebView.setVisibility(View.INVISIBLE);
                llErrView.setVisibility(View.INVISIBLE);
                img.setVisibility(View.VISIBLE);
            }
            //加载错误的时候会回调
            @Override
            public void onReceivedError(WebView webView, int i, String s, String s1) {
                super.onReceivedError(webView, i, s, s1);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    return;
                }
                llErrView.setVisibility(View.VISIBLE);
                mWebView.setVisibility(View.INVISIBLE);
                img.setVisibility(View.GONE);
                loadErr = true;
            }

            //加载错误的时候会回调
            @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
            @Override
            public void onReceivedError(WebView webView, WebResourceRequest webResourceRequest, WebResourceError webResourceError) {
                super.onReceivedError(webView, webResourceRequest, webResourceError);
                if (webResourceRequest.isForMainFrame()) {
                    llErrView.setVisibility(View.VISIBLE);
                    mWebView.setVisibility(View.INVISIBLE);
                    img.setVisibility(View.GONE);
                    loadErr = true;
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                Logger.d("onPageFinished url:" + url + " WebView:" + view.getUrl());
//                super.onPageFinished(view, url);
                if (!isLocation) {
                    isLocation = true;
                }
//                UIHelper.hideLoading();
                img.setVisibility(View.GONE);
                if (!loadErr){
                    mWebView.setVisibility(View.VISIBLE);

                }
                loadErr = false;
//                Utils.addlocationToWebView(mWebView);
                ImmersionBar.with(WebViewActivity.this)
                        .statusBarColor(R.color.color_white)
                        .statusBarDarkFont(true)
                        .fitsSystemWindows(true)
                        .init();
                String realAddr = getRealAddr(url);
                for (String str : WebBaseUrl.NAVAGATIO_NBR) {
                    if (str.equals(realAddr)) {
                        ImmersionBar.with(WebViewActivity.this)
                                .statusBarColor(R.color.register_color)
                                .statusBarDarkFont(false)
                                .fitsSystemWindows(true)
                                .init();
                    }
                }
//                if (!TextUtils.isEmpty(userinfo)) {
//                    mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + JSON.toJSONString(map) + ")", value -> {
//                        //此处为 js 返回的结果
//                        Logger.d("msg:" + value);
//                    });
//                }

                Logger.d("mWebView progress == 100");
                if (!TextUtils.isEmpty(extraInfo)) {
                    mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + extraInfo + ")", value -> {
                        //                            //此处为 js 返回的结果
                        Logger.d("msg:" + value);
                    });
                }
                webLoadSucess = true;
            }
        });

    }

    @OnClick(R.id.refresh)
    public void onClick() {
        mWebView.reload();
        img.setVisibility(View.VISIBLE);
        llErrView.setVisibility(View.INVISIBLE);
    }

    public class AndroidtoJs extends Object {
        private String mInfo;

        @JavascriptInterface
        public void camera(String type, int number ,boolean isClips) {
            Logger.d("调用相册");
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    new RxPermissions(WebViewActivity.this).request(new String[]{Manifest.permission.CAMERA,
                            Manifest.permission.WRITE_EXTERNAL_STORAGE
                    })
                            .subscribe(granted -> {
                                Logger.d("调用相册 ,已经有权限");
//                                if (granted) {
//                                    jsString = type;
//                                    Utils.startGallery(WebViewActivity.this, PictureMimeType.ofImage(),
//                                            number == 1 ? false : true, true,isClips , REQUEST_CODE_CHOOSE_QRCODE_FROM_GALLERY);
//                                } else {
//                                    Utils.Toast("请在设置中开启权限");
//                                }
                            });
                }
            });

        }

        @JavascriptInterface
        public void back() {
            WebViewActivity.this.finish();
        }

        @JavascriptInterface
        public void refresh() {

        }
        @JavascriptInterface
        public void webBanner(String url){
            if (url.startsWith(WebBaseUrl.baseUrl)) {
                Intent intent1 = new Intent(WebViewActivity.this, WebViewActivity.class);
                if (url.contains("=") && url.contains("?")) {
                    String id = url.substring(url.indexOf("=") + 1);
                    url = url.substring(url.indexOf("/#/"), url.indexOf("?"));

                    Map<String, Object> map = new HashMap<>();
                    Map<String, Object> dataMap = new HashMap<>();
                    map.put("type", "banner");
                    map.put("data", dataMap);
                    dataMap.put("id", id);

                    intent1.putExtra("extraInfo", JSON.toJSONString(map));
                    intent1.putExtra(WEBVIEW_URL, url);
                } else {
                    intent1.putExtra(WEBVIEW_URL, url.substring(url.indexOf("/#/")));
                }
                startActivity(intent1);
            } else {
//                Intent intent = new Intent(WebViewActivity.this, BannerWebActivity.class);
//                intent.putExtra("url", url);
//                startActivity(intent);
            }
        }
        @JavascriptInterface
        public void scan() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    new RxPermissions(WebViewActivity.this).request(new String[]{Manifest.permission.CAMERA,
                            Manifest.permission.WRITE_EXTERNAL_STORAGE
                    })
                            .subscribe(granted -> {
//                                if (granted) {
//                                    startActivityForResult(new Intent(WebViewActivity.this, ScanActivity.class)
//                                            .putExtra("scantype", 1), Constants.REQUEST_CODE_SCAN_QRCODE);
//                                } else {
//                                    Utils.Toast("请在设置中开启权限");
//                                }
                            });
                }
            });
        }

        @JavascriptInterface
        public void refreshToken() {
//            HttpRequest.getInstance().getRefreshToken(PreferenceUtils.getRefreshToken(), 0);
        }
        @JavascriptInterface
        public void cleanToken() {
//            Utils.logout();
        }

        @JavascriptInterface
        public void makeChat(String info) {
//            try {
//                JSONObject jsonObject = new JSONObject(info);
//                boolean invite = jsonObject.optBoolean("isinvite");
//
//                Logger.d("info:" + info);
//                mInfo = info;
//                String userName = getSharedPreferences("kuaikuai_preferences",
//                        Activity.MODE_PRIVATE).getString("userid", "");
//                String nickName = getSharedPreferences("sp_app",
//                        Activity.MODE_PRIVATE | Context.MODE_MULTI_PROCESS).getString("name", "");
//                jsonObject.put("senderAvatar", PreferenceUtils.getHeadUrl(userName));
//                jsonObject.put("senderName", nickName);
//                if ("sendResume".equals(jsonObject.optString("type"))) {
//
//                    positionId = jsonObject.optString("id");
//                    if (!TextUtils.isEmpty(positionId)) {
//                        HttpRequest.getInstance().sendResume(positionId, SEND_RESUME_WHAT);
//                    }
//                } else {
//                    Intent activityIntent = new Intent();
//                    if (TextUtils.isEmpty(jsonObject.optString("title"))) {
//                        activityIntent.putExtra("userId", jsonObject.optString("userId") + "");
//                        activityIntent.putExtra("nickName", jsonObject.optString("nickName"));
//                    } else {
//                        activityIntent.putExtra("userId", jsonObject.optString("userId") + "");
//                        activityIntent.putExtra("info", jsonObject.toString());
//                        activityIntent.putExtra("resumeInvite", invite);
//                        activityIntent.putExtra("nickName", jsonObject.optString("nickName"));
//                    }
//                    activityIntent.setClass(WebViewActivity.this, ChatActivity.class);
//                    startActivity(activityIntent);
//                }
//
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
        }


        @JavascriptInterface
        public void callPhone(String phone) {
            Intent intent = new Intent(Intent.ACTION_DIAL);
            Uri data = Uri.parse("tel:" + phone);
            intent.setData(data);
            startActivity(intent);
        }

        @JavascriptInterface
        public void changeBlueBar() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    ImmersionBar.with(WebViewActivity.this)
                            .statusBarColor(R.color.register_color)
                            .statusBarDarkFont(false)
                            .fitsSystemWindows(true)
                            .init();
                }
            });
        }

        @JavascriptInterface
        public void changeWhiteBar() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    ImmersionBar.with(WebViewActivity.this)
                            .statusBarColor(R.color.color_white)
                            .statusBarDarkFont(true)
                            .fitsSystemWindows(true)
                            .init();
                }
            });
        }

        @JavascriptInterface
        public void openBaiduMap(String info) {
//            try {
//                JSONObject jsonObject = new JSONObject(info);
//                String city = jsonObject.optString("city");
//                String Address = jsonObject.optString("Address");
//                GeoCoder mCoder = GeoCoder.newInstance();
//
//                mCoder.setOnGetGeoCodeResultListener(listener);
//
//                mCoder.geocode(new GeoCodeOption()
//                        .city(city)
//                        .address(Address));
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
        }

        @JavascriptInterface
        public void openGaoDeMap(String info) {
//            try {
//                JSONObject jsonObject = new JSONObject(info);
//                String city = jsonObject.optString("city");
//                String Address = jsonObject.optString("Address");
//                POISearchUtils.poi(city, Address, new POISearchUtils.onResult() {
//                    @Override
//                    public void onLatlng(LatLng latLng, String addr) {
//                        LatLng latlng = MapUtil.BD09ToGCJ02(latLng);
//                        if (MapUtil.isGdMapInstalled()) {
//                            MapUtil.openGaoDeNavi(WebViewActivity.this, 0, 0, null, latlng.latitude, latlng.longitude, Address);
//                        } else {
//                            Utils.Toast("尚未安装高德地图");
//                        }
//                    }
//                });
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
        }

        @JavascriptInterface
        public void logout() {
//            new Thread(new Runnable() {
//                @Override
//                public void run() {
//                    EMClient.getInstance().logout(true);
//                    Utils.cleanToken();
//                }
//            }).start();

        }

        @JavascriptInterface
        public void startNewWeb(String info) {
//            com.alibaba.fastjson.JSONObject jsonObject = JSON.parseObject(info);
//
//            String addr = jsonObject.getString("Url");
//            String data = jsonObject.getString("data");
//            String nativestr = jsonObject.getString("nativeId");
//            if (addr.equals("拼团详情")) {
//                Intent intent = new Intent();
//                intent.putExtra("assembleId", jsonObject.getJSONObject("data").getJSONObject("data").getString("id"));
//                intent.setAction("com.kk.assemble");
//                startActivity(intent);
//            } else if (addr.equals("商铺转让编辑")) {
//                Intent intent = new Intent(WebViewActivity.this, TransferShopActivity.class);
//                intent.putExtra("id", nativestr);
//                startActivity(intent);
//            } else if (addr.equals("添加银行卡")) {
//                startActivity(new Intent(WebViewActivity.this, AddBankCardActivity.class));
//            } else if (addr.equals("装修详情")) {
//                startActivity(new Intent(WebViewActivity.this, RenvoationCompanyDetailActivity.class)
//                        .putExtra("serviceProviderId", nativestr));
//            }


        }

        @JavascriptInterface
        public void uploadIDCard(boolean face) {
//            if (face) {
//                jsString = "face";
//                OCRutils.IDCardFace(WebViewActivity.this);
//            } else {
//                jsString = "back";
//                OCRutils.IDCardBack(WebViewActivity.this);
//            }
        }

        @JavascriptInterface
        public void showDialog() {
//            Utils.showOtherLoginDialog(WebViewActivity.this);
        }

        @JavascriptInterface
        public void toLogin(String str) {
//            Utils.startToLogin();
        }
    }

//    OnGetGeoCoderResultListener listener = new OnGetGeoCoderResultListener() {
//        @Override
//        public void onGetGeoCodeResult(GeoCodeResult geoCodeResult) {
//            if (null != geoCodeResult && null != geoCodeResult.getLocation()) {
//                if (geoCodeResult == null || geoCodeResult.error != SearchResult.ERRORNO.NO_ERROR) {
//                    //没有检索到结果
//                    return;
//                } else {
//                    double latitude = geoCodeResult.getLocation().latitude;
//                    double longitude = geoCodeResult.getLocation().longitude;
//                    Logger.d("resut2:" + geoCodeResult.getAddress() + " latitude:" + latitude + " longitude" + longitude);
//                    if (MapUtil.isBaiduMapInstalled()) {
//                        MapUtil.openBaiDuNavi(WebViewActivity.this, 0, 0, null, latitude, longitude, geoCodeResult.getAddress());
//                    } else {
//                        Utils.Toast("尚未安装百度地图");
//                    }
//                }
//            }
//        }
//
//        @Override
//        public void onGetReverseGeoCodeResult(ReverseGeoCodeResult geoCodeResult) {
//
//        }
//    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

//        mZXingView.startSpotAndShowRect(); // 显示扫描框，并开始识别

        switch (requestCode) {
            case REQUEST_CODE_CHOOSE_QRCODE_FROM_GALLERY:
                List<LocalMedia> selectList = PictureSelector.obtainMultipleResult(data);
                if (selectList.size() > 0) {
                    for (LocalMedia localMedia : selectList) {
                        String picturePath;
                        if (localMedia.isCut()){
                            picturePath = localMedia.getCutPath();
                        }else {
                            picturePath = localMedia.getPath();
                        }
                        File file = new File(picturePath);
//                        if (file.length() <= IMG_LENGTH) {
//                            String finalPicturePath = picturePath;
//                            new Thread(new Runnable() {
//                                @Override
//                                public void run() {
//                                    AliyunOSSManager aliyunOSSManager = new AliyunOSSManager(WebViewActivity.this);
//                                    aliyunOSSManager.setFileName(finalPicturePath.substring(finalPicturePath.lastIndexOf("/") + 1));
//                                    aliyunOSSManager.setUploadLocalPath(finalPicturePath);
//                                    aliyunOSSManager.startUp(finalPicturePath, Constants.requstCode.FILE_UPLOAD_WHAT);
//                                }
//                            }).start();
////                            HttpRequest.getInstance().fileUpload(new File(picturePath), Constants.requstCode.FILE_UPLOAD_WHAT);
//                        } else {
//                            Utils.Toast("上传图片大小不超过10M");
//                        }
                    }
                }
                break;
//            case Constants.REQUEST_CODE_SCAN_QRCODE:
//                if (data == null) {
//                    return;
//                }
//                String info = data.getStringExtra(Constants.GOTO_INFO_CARD);
//                Map<String, String> dataMap = new HashMap<>();
//                dataMap.put("type", "scan");
//                dataMap.put("data", info);
//                mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + JSON.toJSONString(dataMap) + ")", value -> {
//                    //此处为 js 返回的结果
//                    Logger.d("msg:" + value);
//                });
//                break;
            default:
                break;
        }
        if (requestCode == REQUEST_CODE_CAMERA && resultCode == Activity.RESULT_OK) {
            if (data != null) {
//                String contentType = data.getStringExtra(CameraActivity.KEY_CONTENT_TYPE);
//                filePath = FileUtil.getSaveFile(getApplicationContext()).getAbsolutePath();
//                if (!TextUtils.isEmpty(contentType)) {
//                    if (CameraActivity.CONTENT_TYPE_ID_CARD_FRONT.equals(contentType)) {
//                        OCRutils.recIDCard(WebViewActivity.this, IDCardParams.ID_CARD_SIDE_FRONT, filePath, mOnResultListener);
//                    } else if (CameraActivity.CONTENT_TYPE_ID_CARD_BACK.equals(contentType)) {
//                        OCRutils.recIDCard(WebViewActivity.this, IDCardParams.ID_CARD_SIDE_BACK, filePath, mOnResultListener);
//                    }
//                }
            }
        }
    }

    @Override
    public void onSucceed(int what, Response<JSONObject> response) {
//        if (what == Constants.requstCode.FILE_UPLOAD_WHAT) {
//            String imgurl = response.get().optJSONObject("data").optString("url");
//            String id = response.get().optJSONObject("data").optString("fileId");
//            Map<String, Object> map = new HashMap<>();
//            Map<String, Object> dataMap = new HashMap<>();
//
//            map.put("type", jsString);
//            dataMap.put("url", imgurl);
//            dataMap.put("id", id);
//            map.put("data", dataMap);
//            String json = JSON.toJSONString(map);
//            Logger.d("json:" + json);
//            mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + json + ")", value -> {
//                //此处为 js 返回的结果
//                Logger.d("msg:" + value);
//            });
//        } else if (what == RESUME_WHAT) {
//            JSONObject jsonObject = response.get().optJSONObject("data").optJSONObject("userResumeVO");
//            if (jsonObject == null) {
//                Utils.Toast("请先创建简历");
//                return;
//            }
//            String intensionJobName = jsonObject.optString("intensionJobName");
//            if (intensionJobName == null || intensionJobName.equals("null")) {
//                Utils.Toast("请先完善简历");
//                return;
//            }
//
//            SendResumeBottomPopupWindow popupWindow = new SendResumeBottomPopupWindow(this, false
//                    , jsonObject.optString("intensionJobName")
//                    , jsonObject.optString("intensionSalLeft") + "-" + jsonObject.optString("intensionSalRight")
//                    , jsonObject.optString("jobCity")
//                    , jsonObject.optString("jobYearsLeft") + "年");
//
//            //根据指定View定位
//            popupWindow.showAtLocation(mWebView, Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL, 0, 0);
//            backgroundAlpha(0.3f);
//            popupWindow.setOnDismissListener(() -> {
//                backgroundAlpha(1f);
//            });
//            popupWindow.setOnClickListener(v -> {
//                if (v.getId() == R.id.submit) {
//
//                    if (data != null){
//                        String id = data.optString("id");
//                        String realName = data.optString("name");
//                        String intensionJobName1 = data.optString("intensionJobName");
//
//                        Intent activityIntent = new Intent();
//                        try {
//                            JSONObject jsonObject1 = new JSONObject(mAndroidtoJs.mInfo);
//                            String userName = getSharedPreferences("kuaikuai_preferences",
//                                    Activity.MODE_PRIVATE).getString("userid", "");
//                            String nickName = getSharedPreferences("sp_app",
//                                    Activity.MODE_PRIVATE | Context.MODE_MULTI_PROCESS).getString("name", "");
//                            jsonObject1.put("senderAvatar", PreferenceUtils.getHeadUrl(userName));
//                            jsonObject1.put("senderName", nickName);
//
//                            activityIntent.putExtra("userId", jsonObject1.optString("userId") + "");
//                            activityIntent.putExtra("info", jsonObject1.toString());
//                            activityIntent.putExtra("nickName", jsonObject1.optString("nickName"));
//                            activityIntent.setClass(WebViewActivity.this, ChatActivity.class);
//                            activityIntent.putExtra("resumeName", realName + "的简历");
//                            activityIntent.putExtra("resumePosition", intensionJobName1);
//                            activityIntent.putExtra("resumeUrl", id);
//                            startActivity(activityIntent);
//
//                        } catch (JSONException e) {
//                            e.printStackTrace();
//                        }
//                    }
//
//                } else {
//
//                }
//                popupWindow.dismiss();
//
//            });
//        } else if (what == SEND_RESUME_WHAT) {
//             data = response.get().optJSONObject("data");
//            HttpRequest.getInstance().getResume(RESUME_WHAT);
//        }
//    }
//
//    public void backgroundAlpha(float bgAlpha) {
//        WindowManager.LayoutParams lp = getWindow().getAttributes();
//        lp.alpha = bgAlpha; //0.0-1.0
//        getWindow().setAttributes(lp);
//    }
//
//    @Override
//    protected void onResume() {
//        super.onResume();
//        if (!TextUtils.isEmpty(PreferenceUtils.getToken()) && mWebView != null) {
//            Map<String, Object> map = new HashMap<>();
//            map.put("type", "toLogin");
//            Map<String, Object> dataMap = new HashMap<>();
//            dataMap.put("token", PreferenceUtils.getToken());
//            map.put("data", dataMap);
//            mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + JSON.toJSONString(map) + ")", value -> {
//                //                            //此处为 js 返回的结果
//                Logger.d("msg:" + value);
//            });
//        }
    }

    @Override
    public void onBackPressed() {
        String contentUrl = mWebView.getUrl();
        boolean needBack = false;//需要处理webview返回
        String realAddr = getRealAddr(contentUrl);
        for (String str : WebBaseUrl.NAVAGATION) {
            if (str.equals(realAddr)) {
                needBack = true;
            }
        }
        if (needBack && webLoadSucess) {
            mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + getInfo(mWebView.getUrl()) + ")", value -> {
            });
        } else {
            if (mWebView.canGoBack()) {
                mWebView.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
                mWebView.goBack();
            } else {
                this.finish();
            }
        }

    }

    private static final String INTERRUPT_ADDRESS = "shopauthentication/authenticationmessage";

    private String getInfo(String address) {
        Map<String, String> map = new HashMap<>();
        address = getRealAddr(address);
        Logger.d("address:" + address);
        map.put("type", "nativeBack");
        map.put("data", address);
        return JSON.toJSONString(map);
    }

    private String getRealAddr(String address) {
        if (!address.contains("?")) {
            return address.substring(address.indexOf("/#/") + 2);
        }
        return address.substring(address.indexOf("/#/") + 2, address.lastIndexOf("?"));
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
        img = null;
//        CameraNativeHelper.release();
    }

    private void initOCR() {
        //  初始化本地质量控制模型,释放代码在onDestory中
        //  调用身份证扫描必须加上 intent.putExtra(CameraActivity.KEY_NATIVE_MANUAL, true); 关闭自动初始化和释放本地模型
//        CameraNativeHelper.init(this, OCR.getInstance(this).getLicense(),
//                new CameraNativeHelper.CameraNativeInitCallback() {
//                    @Override
//                    public void onError(int errorCode, Throwable e) {
//                        String msg;
//                        switch (errorCode) {
//                            case CameraView.NATIVE_SOLOAD_FAIL:
//                                msg = "加载so失败，请确保apk中存在ui部分的so";
//                                break;
//                            case CameraView.NATIVE_AUTH_FAIL:
//                                msg = "授权本地质量控制token获取失败";
//                                break;
//                            case CameraView.NATIVE_INIT_FAIL:
//                                msg = "本地质量控制";
//                                break;
//                            default:
//                                msg = String.valueOf(errorCode);
//                        }
//                        Logger.d("error:" + msg);
//                    }
//                });
    }

    private void showErrorDialog() {
//        NormalDialog normalDialog = new NormalDialog(this, new NormalDialog.onConfirmListener() {
//            @Override
//            public void onLeft() {
//
//            }
//
//            @Override
//            public void onRight() {
//
//            }
//        });
//        normalDialog.setNoticeText("系统未成功识别该身份证的照片，请重新拍摄");
//        normalDialog.setLeftText("我知道了");
//        normalDialog.setRightVisiable();
//        normalDialog.show();
    }
//
//    private OnResultListener<IDCardResult> mOnResultListener = new OnResultListener<IDCardResult>() {
//        @Override
//        public void onResult(IDCardResult idCardResult) {
//
//            String direction = idCardResult.getIdCardSide();
//            Logger.d("idCardResult:" + direction + "  " + idCardResult.toString());
//            if (direction.equals("front")) {
//                if (TextUtils.isEmpty(idCardResult.getIdNumber().toString())) {
//                    showErrorDialog();
//                } else {
//                    Map<String, Object> map = new HashMap<>();
//                    Map<String, Object> idcardMap = new HashMap<>();
//                    idcardMap.put("name", idCardResult.getName().toString());
//                    idcardMap.put("idNumber", idCardResult.getIdNumber().toString());
//                    map.put("type", "idcard");
//                    map.put("data", idcardMap);
//                    mWebView.evaluateJavascript("javascript:$Hybrid.appGoBack(" + JSON.toJSONString(map) + ")", value -> {
//                        //此处为 js 返回的结果
//                        Logger.d("msg:" + value);
//                    });
//                    upLoadImage(filePath, true);
//                }
//
//            } else if (direction.equals("back")) {
//                if (TextUtils.isEmpty(idCardResult.getExpiryDate().toString())) {
//                    showErrorDialog();
//                } else {
//                    upLoadImage(filePath, false);
//                }
//
//            }
//        }
//
//        @Override
//        public void onError(OCRError ocrError) {
//
//        }
//    };

    private void upLoadImage(String imgPath, boolean front) {
        new Thread(new Runnable() {
            @Override
            public void run() {
//                AliyunOSSManager aliyunOSSManager = new AliyunOSSManager(WebViewActivity.this);
//                aliyunOSSManager.setFileName(imgPath.substring(imgPath.lastIndexOf("/") + 1));
//                aliyunOSSManager.setUploadLocalPath(imgPath);
//                aliyunOSSManager.startUp(imgPath, Constants.requstCode.FILE_UPLOAD_WHAT);
            }
        }).start();
    }
}
