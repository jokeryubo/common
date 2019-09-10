package com.yb.common.base;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.gyf.barlibrary.ImmersionFragment;
import com.yb.common.http.HttpRequest;

import butterknife.ButterKnife;
import butterknife.Unbinder;

public abstract class BaseMvpFragment<P extends BasePresenter> extends ImmersionFragment implements IBaseView {

    private Unbinder unBinder;
    protected View rootView = null;
    protected Context mContext;
    protected P presenter;
    private boolean isViewCreated;
    private boolean isFirstVisible = true;
    private boolean isFragmentVisible;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = getActivity();
        //创建present
        presenter = createPresenter();
        if (presenter != null) {
            presenter.attachView(this);
        }
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        if (rootView == null) {
            rootView = inflater.inflate(getLayoutId(), container, false);
        }
        unBinder = ButterKnife.bind(this, rootView);
        if (!isViewCreated){
            initView();
        }

        isViewCreated = true;
        if (isFragmentVisible && isFirstVisible) {
            requestData();
            isFirstVisible = false;

        }

        return rootView;
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
        if (unBinder != null) {
            unBinder.unbind();
        }
        if (presenter != null) {
            presenter.detachView();
        }
    }

    @Override
    public void setUserVisibleHint(boolean isVisibleToUser) {
        super.setUserVisibleHint(isVisibleToUser);

        isFragmentVisible = isVisibleToUser;

        //当 View 创建完成切 用户可见的时候请求 且仅当是第一次对用户可见的时候请求自动数据
        if (isVisibleToUser && isViewCreated && isFirstVisible) {
            requestData();
            isFirstVisible = false;

        }
    }

    protected void setHttpListener(){
        HttpRequest.getInstance().setContext(getContext());
        HttpRequest.getInstance().setRequestResult(presenter.mRequestResult);
    }

    protected abstract int getLayoutId();

    protected abstract void initView();
    /**
     * 只有在 Fragment 第一次对用户可见的时候才去请求
     */
    protected void requestData() {
    }

    /**
     * 创建Presenter
     */
    protected abstract P createPresenter();
}
