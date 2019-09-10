package com.yb.common.common;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Toast;

import com.yanzhenjie.nohttp.Logger;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 *  判断是否是国内手机号{@link Utils#isChinaPhoneLegal(String) }
 *  md5 加密{@link Utils#md5(String) }
 *  判断密码是否为纯数字或者纯字母{@link Utils#ispsd(String) }
 *  根据手机分辨率从DP转成PX{@link Utils#dip2px(Context,float) }
 *  保存图片到指定路径{@link Utils#saveImageToGallery(Context context, Bitmap bitmap, String fileName) }
 *  判断是否符合身份证号码的规范{@link Utils#isIDCard(String) }
 *  判断是否含有特殊字符{@link Utils#isSpecialChar(String) }
 *  获取当前系统时间{@link Utils#getTime() }
 *
 *  只允许汉字{@link Utils#stringFilter1( String fileName) }
 *  关键字高亮变色{@link Utils#matcherSearchTitle(String title,String keyword) }
 *  将时间转换为时间戳{@link Utils#dateToStamp(String) }
 *  隐藏软键盘(只适用于Activity，不适用于Fragment){@link Utils#hideSoftKeyboard(Activity activity) }
 *
 *  获取版本号名称{@link Utils#getVerName(Context context) }
 *  将手机号中间四位替代位*{@link Utils#telMis(String) }
 *  获取应用程序版本code{@link Utils#getVersionCode(Context context)  }
 *  获取应用程序版本包名{@link Utils#getPackageName(Context) }
 *
 */
public class Utils {

    public static void Toast(Context context, String msg ){
        Toast mToast = Toast.makeText(context,msg ,Toast.LENGTH_SHORT);
        mToast.setText(msg);
        mToast.show();
    }

    /**
     * 判断是否是国内手机号
     * @param str
     * @return
     */
    public static boolean isChinaPhoneLegal(String str)  {

        String regExp = "^(1[3-9])\\d{9}$";

        Pattern p = Pattern.compile(regExp);

        Matcher m = p.matcher(str);

        return m.matches();

    }

    /**
     * md5 加密
     * @param string
     * @return
     */
    public static String md5(String string) {
        if (TextUtils.isEmpty(string)) {
            return "";
        }
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
            byte[] bytes = md5.digest(string.getBytes());
            String result = "";
            for (byte b : bytes) {
                String temp = Integer.toHexString(b & 0xff);
                if (temp.length() == 1) {
                    temp = "0" + temp;
                }
                result += temp;
            }
            return result;
        } catch (NoSuchAlgorithmException e) { //1136232037200551938
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 判断密码是否为纯数字或者纯字母
     * @param psd
     * @return
     */
    public static boolean ispsd(String psd) {
        Pattern p = Pattern
                .compile("^[a-zA-Z].*[0-9]|.*[0-9].*[a-zA-Z]");
        Matcher m = p.matcher(psd);

        return m.matches();
    }
    /**
     * 根据手机分辨率从DP转成PX
     * @param context
     * @param dpValue
     * @return
     */
    public static int dip2px(Context context, float dpValue) {
        float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

    /**
     * 保存图片到指定路径
     *
     * @param context
     * @param bitmap   要保存的图片
     * @param fileName 自定义图片名称
     * @return
     */
    public static boolean saveImageToGallery(Context context, Bitmap bitmap, String fileName) {
        // 保存图片至指定路径
        String storePath = Environment.getExternalStorageDirectory().getAbsolutePath() + File.separator + "kuaikuai/image";
        File appDir = new File(storePath);
        if (!appDir.exists()) {
            boolean dir = appDir.mkdirs();
            Logger.d("dir:"+dir);
        }
        File file = new File(appDir, fileName);
        try {
            FileOutputStream fos = new FileOutputStream(file);
            //通过io流的方式来压缩保存图片(80代表压缩20%)
            boolean isSuccess = bitmap.compress(Bitmap.CompressFormat.PNG, 80, fos);
            fos.flush();
            fos.close();

            //发送广播通知系统图库刷新数据
            Uri uri = Uri.fromFile(file);
            context.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, uri));
            if (isSuccess) {
                Toast(context,"已成功保存在:"+storePath+fileName);
                return true;
            } else {
                Toast(context,"保存失败");
                return false;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return false;
    }
    // 判断是否符合身份证号码的规范
    public static boolean isIDCard(String IDCard) {
        if (IDCard != null) {
            String IDCardRegex = "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x|Y|y)$)";
            return IDCard.matches(IDCardRegex);
        }
        return false;
    }

    /**
     * 判断是否含有特殊字符
     *
     * @param str
     * @return true为包含，false为不包含
     */
    public static boolean isSpecialChar(String str) {
        String regEx = "[ _`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]|\n|\r|\t";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(str);
        return m.find();
    }

    /**
     * 获取当前系统时间
     * @return
     */
    public static String  getTime(){
        Date date = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddhhmmss");
        return format.format(date);
    }
    //只允许汉字
    public static String stringFilter1(String str)  {
        String regEx = "[^\u4E00-\u9FA5]";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(str);
        return m.replaceAll("").trim();
    }

    /**
     * 关键字高亮变色
     * @param title
     * @param keyword
     * @return
     */
    public static String matcherSearchTitle(String title,String keyword) {
        String content = title;
        String wordReg = "(?i)" + keyword;//用(?i)来忽略大小写
        StringBuffer sb = new StringBuffer();
        Matcher matcher = Pattern.compile(wordReg).matcher(content);
        while (matcher.find()) {
            //这样保证了原文的大小写没有发生变化
            matcher.appendReplacement(sb, "<font color=\"#54C2A7\">" + matcher.group() + "</font>");
        }
        matcher.appendTail(sb);
//        content = sb.toString();
//        Log.i("Utils", content);
        //如果匹配和替换都忽略大小写,则可以用以下方法
        content = content.replaceAll(wordReg,"<font color=\"#54C2A7\">"+keyword+"</font>");
        Log.i("Utils", content);
        return content;
    }

    /*
     * 将时间转换为时间戳
     */
    public static long dateToStamp(String s) {
        String res;
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = null;
        try {
            date = simpleDateFormat.parse(s);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        long ts = date.getTime();
        return ts;
    }

    /**
     * 隐藏软键盘(只适用于Activity，不适用于Fragment)
     */
    public static void hideSoftKeyboard(Activity activity) {
        View view = activity.getCurrentFocus();
        if (view != null) {
            InputMethodManager inputMethodManager = (InputMethodManager) activity.getSystemService(Activity.INPUT_METHOD_SERVICE);
            inputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), InputMethodManager.HIDE_NOT_ALWAYS);
        }
    }

    /**
     * 获取版本号名称
     *
     * @return
     */
    public static String getVerName(Context context) {
        String verName = "";
        try {
            verName = context.getPackageManager().
                    getPackageInfo(context.getPackageName(), 0).versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return verName;
    }

    /**
     * 将手机号中间四位替代位*
     * @return
     */
    public static String telMis(String tel){
        return  tel.substring(0, 3) + "****" + tel.substring(7, 11);
    }
    /**
     * [获取应用程序版本名称信息]
     * @return 当前应用的版本名称
     */
    public static  int getVersionCode(Context context) {
        try {
            PackageManager packageManager = context.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    context.getPackageName(), 0);
            return packageInfo.versionCode;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }
    /**
     * [获取应用程序版本名称信息]
     * @return 当前应用的版本名称
     */
    public static synchronized String getPackageName(Context context) {
        try {
            PackageManager packageManager = context.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    context.getPackageName(), 0);
            return packageInfo.packageName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
}
