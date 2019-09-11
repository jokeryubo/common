package com.yb.common.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.yb.common.R;
import com.yb.common.common.Utils;

/**
 * @author yubo
 * @description: 个人中心 item样式
 * @date :2019/9/11 15:26
 */
public class ItemView extends RelativeLayout  {
    private Context mContext;
    private RelativeLayout mRootView;
    private ImageView mLeftIcon,mRgithIcon;
    private TextView mItemName,mItemRightName;
    private View mDivider;

    public ItemView(Context context) {
        super(context);
        mContext = context;
        initViews(null);
    }

    public ItemView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
        initViews(attrs);
    }

    public ItemView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mContext = context;
        initViews(attrs);
    }

    private void initViews(AttributeSet attrs){
        View view = LayoutInflater.from(mContext).inflate(R.layout.item_layout,this,true);
        mRootView = view.findViewById(R.id.rootView);
        mLeftIcon = view.findViewById(R.id.left_icon);
        mRgithIcon = view.findViewById(R.id.right_icon);
        mItemName = view.findViewById(R.id.item_name);
        mItemRightName = view.findViewById(R.id.item_right_name);
        mDivider = view.findViewById(R.id.divider);
        initAttrs(attrs);
    }

    private void initAttrs(AttributeSet attrs){
        TypedArray typedArray = mContext.obtainStyledAttributes(attrs, R.styleable.ItemView);
        int rootViewHeight = (int) typedArray.getDimension(R.styleable.ItemView_iv_rootViewHeight, Utils.dip2px(mContext,50));
        Drawable leftIcon =  typedArray.getDrawable(R.styleable.ItemView_iv_leftIcon);
        Drawable rightIcon =  typedArray.getDrawable(R.styleable.ItemView_iv_rightIcon);
        String itemText =  typedArray.getString(R.styleable.ItemView_iv_itemText);
        int itemTextMarginLeft = (int) typedArray.getDimension(R.styleable.ItemView_iv_itemTextMarginLeft, Utils.dip2px(mContext,8));
        int itemTextColor =  typedArray.getColor(R.styleable.ItemView_iv_itemTextColor, mContext.getResources().getColor(R.color.phone_text_color));
        float itemTextSize =  typedArray.getDimension(R.styleable.ItemView_iv_itemTextSize, Utils.dip2px(mContext,14));
        String itemRightText = typedArray.getString(R.styleable.ItemView_iv_itemRightText);
        int itemRightTextColor =  typedArray.getColor(R.styleable.ItemView_iv_itemRightTextColor, mContext.getResources().getColor(R.color.cp_color_gray_deep));
        float itemRightTextSize =  typedArray.getDimension(R.styleable.ItemView_iv_itemRightTextSize, Utils.dip2px(mContext,14));
        int itemRightMarginRight = (int) typedArray.getDimension(R.styleable.ItemView_iv_itemRightMarginRight, Utils.dip2px(mContext,5));
        int divderColor =  typedArray.getColor(R.styleable.ItemView_iv_divderColor, mContext.getResources().getColor(R.color.sep_color));
        typedArray.recycle();

        LayoutParams layoutParams = (LayoutParams) mRootView.getLayoutParams();
        layoutParams.height = rootViewHeight;
        mRootView.setLayoutParams(layoutParams);

        mLeftIcon.setImageDrawable(leftIcon);
        mRgithIcon.setImageDrawable(rightIcon);

        mItemName.setText(itemText);
        LayoutParams params = (LayoutParams) mItemName.getLayoutParams();
        params.leftMargin = itemTextMarginLeft;
        mItemName.setLayoutParams(params);
        mItemName.setTextColor(itemTextColor);
        mItemName.getPaint().setTextSize(itemTextSize);

        mItemRightName.getPaint().setTextSize(itemRightTextSize);
        mItemRightName.setTextColor(itemRightTextColor);
        mItemRightName.setText(itemRightText);
        LayoutParams rightParams = (LayoutParams) mItemRightName.getLayoutParams();
        rightParams.rightMargin = itemRightMarginRight;
        mItemRightName.setLayoutParams(rightParams);

        mDivider.setBackgroundColor(divderColor);
    }

    /**
     * 给整个item设置点击监听
     * @param onClickListener
     */
    public void setOnClick(OnClickListener onClickListener){
        this.setOnClickListener(onClickListener);
    }

    public void setRightText(String text){
        mItemRightName.setText(text);
    }

    public void setLeftIconVisiablity(boolean visiablity) {
        mLeftIcon.setVisibility(visiablity ? View.VISIBLE : View.GONE);
    }

    public void setRgithIconVisiablity(boolean visiablity) {
        mRgithIcon.setVisibility(visiablity ? View.VISIBLE : View.INVISIBLE);
    }

    public void setItemRightNameVisiablity(boolean visiablity) {
        mItemRightName.setVisibility(visiablity ? View.VISIBLE : View.INVISIBLE);
    }
}
