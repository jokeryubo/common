package com.yb.common.common;

import android.text.TextUtils;

import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.rest.Request;

import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Formatter;
import java.util.Locale;
import java.util.TimeZone;
import java.util.UUID;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class HttpUtils {
    private static final String HMAC_HASH_256 = "HmacSHA256";
    private static final String SERTKEY = "F4FA49E319A34DB3BF551CD801988FD9";
    public static final String VERSION = "1.0.0";
    public static final String TOKEN = "token";
    public static final String KEY = "813F147064D54EDAA86352C29806047B";

    private static String signature(String data, String key) throws NoSuchAlgorithmException, InvalidKeyException {
        SecretKeySpec signingKey = null;
        try {
            signingKey = new SecretKeySpec(key.getBytes("UTF-8"), HMAC_HASH_256);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        Mac mac = Mac.getInstance(HMAC_HASH_256);
        mac.init(signingKey);
        try {
            return toHexString(mac.doFinal(data.getBytes("UTF-8")));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static String toHexString(byte[] bytes) {
        Formatter formatter = new Formatter();
        for (byte b : bytes) {
            formatter.format("%02x", b);
        }
        return formatter.toString();
    }
//然后对拼接的字符串进行HmacSHA256加密

    private static String getSignString(String path, String gmtString, String version, String randomString, String body, String jwtString) {
        String sign = path + ";" + gmtString + ";" + version + ";" + randomString;
        if (!TextUtils.isEmpty(body)) {
            sign += ";" + body;
        }
        if (!TextUtils.isEmpty(jwtString)) {
            sign += ";" + jwtString;
        }
        return sign;
    }

    private static String signHmac256(String path, String gmtString,  String version, String randomString, String body, String jwtString) {
        String sign = getSignString(path, gmtString, version, randomString, body, jwtString);
        try {
            sign = signature(sign, SERTKEY);
            Logger.d("sign:"+sign);
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            Logger.e( "hmac-256加密失败");
            Logger.e( e);
            e.printStackTrace();
        }

        return sign;
    }

    public static void addHeaders(Request<JSONObject> request , String path , String body ){
        request.setContentType("application/json;charset=UTF-8");
        String time = timeFormat();
        String uuid = getUUID();
        String url = request.url();
        if (url.contains("?")) {
            path = path + url.substring(url.indexOf("?"), url.length());
        }
//        String Authorization = PreferenceUtils.getPrefsStringValue(TOKEN,"", KKApplication.getContext());
        String Authorization = "";
        request.addHeader("gDate", time)
                .addHeader("sign",signHmac256(path,time,VERSION,uuid,body,Authorization))
                .addHeader("Authorization",Authorization)
                .addHeader("rs",uuid);
        if (!TextUtils.isEmpty(body)){
            request.addHeader("body",body );
        }
    }
    private static String timeFormat(){
        Date d = new Date();
        DateFormat format = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z", Locale.US);
        format.setTimeZone(TimeZone.getTimeZone("GMT"));
        return format.format(d);
    }

    private static String getUUID(){
        UUID uuid= UUID.randomUUID();
        String str = uuid.toString();
        String uuidStr=str.replace("-", "");
        return uuidStr;
    }
}
