package com.yb.common.base;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;
import android.view.WindowManager;

import com.gyf.barlibrary.ImmersionBar;
import com.yb.common.R;
import com.yb.common.http.HttpRequest;

import butterknife.ButterKnife;
import butterknife.Unbinder;

public abstract class BaseMvpActivity<P extends BasePresenter> extends FragmentActivity implements IBaseView {

    protected P presenter;
    private Context mContext;
    private Unbinder unbinder;
    protected ImmersionBar mImmersionBar;
    @SuppressWarnings("unchecked")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = this;
        getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
        setContentView(getLayoutId());
        //初始化ButterKnife
        unbinder = ButterKnife.bind(this);

        //创建present
        presenter = createPresenter();
        if (presenter != null) {
            presenter.attachView(this);
        }
        mImmersionBar =  ImmersionBar.with(this);
        mImmersionBar
                .statusBarColor(R.color.color_white)
                .statusBarDarkFont(true)
                .fitsSystemWindows(true)
                .init();
    }
    @Override
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        initView();
    }
    protected void setWhiteBar(){
       if (mImmersionBar != null)
           mImmersionBar
                   .statusBarColor(R.color.color_white)
                   .statusBarDarkFont(true)
                   .fitsSystemWindows(true)
                   .init();
    }
    protected void setBlueBar(){
        if (mImmersionBar != null)
            mImmersionBar
                    .statusBarColor(R.color.register_color)
                    .statusBarDarkFont(false)
                    .fitsSystemWindows(true)
                    .init();
    }

    protected void setTransParentBar(){
        if (mImmersionBar != null)
             mImmersionBar
                 .statusBarDarkFont(false)
                .transparentStatusBar()
                .fitsSystemWindows(false)
                .init();
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (presenter != null) {
            presenter.detachView();
            presenter = null;
        }
        if (unbinder != null) {
            unbinder.unbind();
        }
        if (mImmersionBar != null)
            mImmersionBar.destroy();
    }

    @Override
    protected void onResume() {
        super.onResume();
        HttpRequest.getInstance().setContext(getContext());
        HttpRequest.getInstance().setRequestResult(presenter.mRequestResult);
    }

    @Override
    public Context getContext() {
        return mContext;
    }



    /**
     * 创建Presenter
     */
    protected abstract P createPresenter();

    protected abstract int getLayoutId();

    protected abstract void initView();
}