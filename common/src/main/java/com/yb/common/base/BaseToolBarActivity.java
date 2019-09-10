package com.yb.common.base;

import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.annotation.RequiresApi;
import android.support.v7.widget.Toolbar;

import com.yb.common.R;


/**
 * 带toolsbar 的基类activty
 * @param <P>
 */
@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
public abstract class BaseToolBarActivity<P extends  BasePresenter> extends BaseMvpActivity<P> {
    protected Toolbar mToolbar;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mToolbar = findViewById(R.id.toolbar);

        mToolbar.setNavigationOnClickListener(view -> finish());
    }


    protected void setTitleText(String title) {
        if (mToolbar != null) {
            mToolbar.setTitle(title);
        }
    }

    protected void setTitleText(int title) {
        if (mToolbar != null) {
            mToolbar.setTitle(getString(title));
        }
    }
    protected boolean isActionBar() {
        return true;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mImmersionBar != null)
            mImmersionBar.destroy();
    }
}
