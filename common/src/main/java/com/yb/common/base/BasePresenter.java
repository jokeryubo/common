package com.yb.common.base;

import android.content.Context;
import android.text.TextUtils;
import android.widget.TextView;
import com.yanzhenjie.nohttp.error.NetworkError;
import com.yanzhenjie.nohttp.error.TimeoutError;
import com.yanzhenjie.nohttp.error.URLError;
import com.yanzhenjie.nohttp.error.UnKnownHostError;
import com.yanzhenjie.nohttp.rest.Response;
import com.yb.common.R;
import com.yb.common.common.UIHelper;
import com.yb.common.common.Utils;
import com.yb.common.http.RequestResult;

import org.json.JSONObject;

import java.lang.ref.WeakReference;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public abstract class BasePresenter<M extends IBaseModel, V extends IBaseView>  {

    private V mProxyView;
    private M module;
    private WeakReference<V> weakReference;

    /**
     * 绑定View
     */
    @SuppressWarnings("unchecked")
    public void attachView(V view) {
        weakReference = new WeakReference<>(view);
        mProxyView = (V) Proxy.newProxyInstance(
                view.getClass().getClassLoader(),
                view.getClass().getInterfaces(),
                new MvpViewHandler(weakReference.get()));
        if (this.module == null) {
            this.module = createModule();
        }

    }

    /**
     * 解绑View
     */
    public void detachView() {
        this.module = null;
        if (isViewAttached()) {
            weakReference.clear();
            weakReference = null;
        }
    }

    /**
     * 是否与View建立连接
     */
    protected boolean isViewAttached() {
        return weakReference != null && weakReference.get() != null;
    }

    protected V getView() {
        return mProxyView;
    }

    protected M getModule() {
        return module;
    }

    protected Context getContext() {
        return getView().getContext();
    }



    /**
     * 通过该方法创建Module
     */
    protected abstract M createModule();

    /**
     * 初始化方法
     */
    public abstract void start();

    public abstract void onRequestSucess(int what , Response<JSONObject> response);
//    /**
//     * 与Activity onResume生命周期同步的方法
//     */
//    public abstract void onResume();


    /**
     * View代理类  防止 页面关闭P异步操作调用V 方法 空指针问题
     */
    private class MvpViewHandler implements InvocationHandler {

        private IBaseView mvpView;

        MvpViewHandler(IBaseView mvpView) {
            this.mvpView = mvpView;
        }

        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            //如果V层没被销毁, 执行V层的方法.
            if (isViewAttached()) {
                return method.invoke(mvpView, args);
            } //P层不需要关注V层的返回值
            return null;
        }
    }
    public RequestResult mRequestResult = new RequestResult() {
        @Override
        public void onSucceed(int what, Response<JSONObject> response) {
            onRequestSucess(what,response);
        }

        @Override
        public void onFailed(int what, Response<JSONObject> response) {
            if (response.getException() != null) {
                Exception exception = response.getException();
                if (exception instanceof NetworkError) {// 网络不好
                    Utils.Toast(getContext(),"网络异常");
                } else if (exception instanceof TimeoutError) {// 请求超时
                    Utils.Toast(getContext(),"请求超时");
                } else if (exception instanceof UnKnownHostError) {// 找不到服务器
                    Utils.Toast(getContext(),"找不到服务器");
                } else if (exception instanceof URLError) {// URL是错的
                    Utils.Toast(getContext(),"URL错误");
                } else {
                    Utils.Toast(getContext(),"未知错误");
                }
            }
            if (response.get() != null) {
                if (TextUtils.isEmpty(response.get().optString("msg"))) {
                    Utils.Toast( getContext(),"网络异常");
                } else {
                    Utils.Toast( getContext(),response.get().optString("msg"));
                }
            }
        }
        @Override
        public void onFinish(int what) {
            UIHelper.hideLoading();
        }
    };
    /**
     * 改变不可点击和可点击的样式
     *
     * @param
     * @param textView
     */
    public void changeBackground(TextView textView, boolean identfy) {
        if (identfy) {
            textView.setBackgroundColor(getContext().getResources().getColor(R.color.idefy_use_color));
            textView.setTextColor(getContext().getResources().getColor(R.color.idefy_use_text_color));
            textView.setClickable(true);
        } else {
            textView.setTextColor(getContext().getResources().getColor(R.color.idefy_not_use_text_color));
            textView.setBackgroundColor(getContext().getResources().getColor(R.color.idefy_not_use_color));
            textView.setClickable(false);
        }
    }

}
