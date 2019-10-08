package com.yb.common.common;

import android.os.CountDownTimer;

/*
 * create by yubo on 2019/03/05
 *
 * 倒计时
 */
public  class CountTimer extends CountDownTimer {

    public CountTimer(long millisInFuture, long countDownInterval) {
        super(millisInFuture, countDownInterval);
    }

    /**
     * 倒计时过程中调用
     *
     * @param millisUntilFinished
     */
    @Override
    public void onTick(long millisUntilFinished) {
        if (mOnCountTime != null){
            mOnCountTime.onTick(millisUntilFinished);
        }
    }

    /**
     * 倒计时完成后调用
     */
    @Override
    public void onFinish() {
        if (mOnCountTime != null){
            mOnCountTime.onFinish();
        }
    }

    public interface OnCountTime{
        void onTick(long millisUntilFinished);
        void onFinish();
    }
    private OnCountTime mOnCountTime;

    public void setOnCountTime(OnCountTime onCountTime) {
        mOnCountTime = onCountTime;
    }
}
