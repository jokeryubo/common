package com.yb.common.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.text.Editable;
import android.text.InputFilter;
import android.text.InputType;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.yb.common.R;
import com.yb.common.common.Utils;

/**
 * @author yubo
 * @description: 带清除按钮的 edittext
 * @date :2019/9/10 11:09
 */
public class EditextWithClearView extends RelativeLayout implements TextWatcher,View.OnClickListener,View.OnFocusChangeListener {

    private Context mContext;
    private EditText mEditText;
    private RelativeLayout mRelativeLayout;
    private TextView mTextView;
    private int maxLength;
    private int paddingTop;
    private int paddingBottom;
    private int marginRight;
    private String hint;
    private int textColor;
    private int textColorHint;
    private int textCursorDrawable;
    private float textSize;
    private Drawable background;
    private int edit_background;
    private int editLength;
    public EditextWithClearView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
        initViews(attrs);
    }

    public EditextWithClearView(Context context) {
        super(context);
        mContext = context;
        initViews(null);
    }

    public EditextWithClearView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mContext = context;
        initViews(attrs);
    }

    private void initViews(AttributeSet attrs){
        View view = LayoutInflater.from(mContext).inflate(R.layout.edittext_with_clear_layout,this,true);
        mEditText = view.findViewById(R.id.edit_phone);
        mRelativeLayout = view.findViewById(R.id.clear_edit);
        mTextView = view.findViewById(R.id.textview);
        mEditText.addTextChangedListener(this);
        mRelativeLayout.setOnClickListener(this);
        mEditText.setOnFocusChangeListener(this);
        initAttr(attrs);
    }
    private void initAttr(AttributeSet attrs){
        TypedArray typedArray = mContext.obtainStyledAttributes(attrs, R.styleable.EditextWithClearView);

        maxLength = typedArray.getInt(R.styleable.EditextWithClearView_ewcv_maxLength,11);
        paddingTop = (int) typedArray.getDimension(R.styleable.EditextWithClearView_ewcv_paddingTop, 10);
        paddingBottom = (int) typedArray.getDimension(R.styleable.EditextWithClearView_ewcv_paddingBottom,10);
        marginRight = (int) typedArray.getDimension(R.styleable.EditextWithClearView_ewcv_marginRight,30);
        hint = typedArray.getString(R.styleable.EditextWithClearView_ewcv_hint);
        textColor = typedArray.getColor(R.styleable.EditextWithClearView_ewcv_textColor,mContext.getResources().getColor(R.color.phone_text_color));
        textColorHint = typedArray.getColor(R.styleable.EditextWithClearView_ewcv_textColorHint,mContext.getResources().getColor(R.color.hint_color));
        textCursorDrawable = typedArray.getColor(R.styleable.EditextWithClearView_ewcv_textCursorDrawable,mContext.getResources().getColor(R.color.colorPrimary));
        textSize = typedArray.getDimension(R.styleable.EditextWithClearView_ewcv_textSize,14);
        background = typedArray.getDrawable(R.styleable.EditextWithClearView_ewcv_background);
        edit_background = typedArray.getColor(R.styleable.EditextWithClearView_ewcv_edit_background,mContext.getResources().getColor(R.color.transparent));
        int inputType = typedArray.getInt(R.styleable.EditextWithClearView_ewcv_inputType,InputType.TYPE_CLASS_TEXT);
        typedArray.recycle();
        mEditText.setFilters(new InputFilter[] { new InputFilter.LengthFilter(maxLength) });
        mEditText.setPadding(0,paddingTop,0,paddingBottom);
        LayoutParams params = (LayoutParams) mEditText.getLayoutParams();
        params.rightMargin =marginRight ;
//        mEditText.setLayoutParams(params);
        if (inputType == InputType.TYPE_TEXT_VARIATION_PASSWORD){
            mEditText.setInputType(InputType.TYPE_TEXT_VARIATION_PASSWORD | InputType.TYPE_CLASS_TEXT);
        }else {
            mEditText.setInputType(inputType);
        }

        mEditText.setHint(hint);
        mEditText.setTextColor(textColor);
        mEditText.setHintTextColor(textColorHint);
        mEditText.getPaint().setTextSize(textSize);
        mEditText.setBackgroundColor(edit_background);
        mTextView.setBackground(background);
    }
    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {

    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {

    }

    @Override
    public void afterTextChanged(Editable s) {
        if (mOnTextListener != null){
            mOnTextListener.afterTextChanged(this,s);
        }
        editLength = s.length();
        if ( editLength > 0){
            mRelativeLayout.setVisibility(View.VISIBLE);
        }
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.clear_edit){
            mEditText.setText("");
        }
    }

    @Override
    public void onFocusChange(View v, boolean hasFocus) {
        if (hasFocus && editLength > 0){
            mRelativeLayout.setVisibility(View.VISIBLE);
        }else {
            mRelativeLayout.setVisibility(View.INVISIBLE);
        }
        if (mOnTextListener != null){
            mOnTextListener.onFocusChange(this,hasFocus);
        }
    }

    public void setEditTextInputFilter(InputFilter[] filters){
        mEditText.setFilters(filters);
    }
    private interface onTextListener{
        void afterTextChanged(View v, Editable s);
        void onFocusChange(View v, boolean hasFocus);
    }
    private onTextListener mOnTextListener;

    public void setOnTextListener(onTextListener onTextListener) {
        mOnTextListener = onTextListener;
    }
}
