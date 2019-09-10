package com.yb.common.common;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;



/**
 * SharedPreference工具类
 *
 * @author hyy
 */
public class PreferenceUtils {
	private static final String SHARED_PREFS_NAME = "kuaikuai_preferences";
    /**
     * 获得给定值对应的字符串值
     *
     * @param key          the key
     * @param defaultValue the default value
     * @param context      the context
     * @return prefs string value
     */
    public static String getPrefsStringValue(String key, String defaultValue, Context context) {
		return context.getSharedPreferences(SHARED_PREFS_NAME,
				Activity.MODE_PRIVATE).getString(key, defaultValue);
	}

    /**
     * 获得给定值对应的整型值
     *
     * @param key          the key
     * @param defaultValue the default value
     * @param context      the context
     * @return prefs int value
     */
    public static int getPrefsIntValue(String key, int defaultValue, Context context) {
		return context.getSharedPreferences(SHARED_PREFS_NAME,
				Activity.MODE_PRIVATE).getInt(key, defaultValue);
	}

    /**
     * 保存整形数据
     *
     * @param key     the key
     * @param value   the value
     * @param context the context
     * @return boolean
     */
    public static boolean savePrefsIntValue(String key, int value, Context context) {
		SharedPreferences shared = context.getSharedPreferences(SHARED_PREFS_NAME,
				Activity.MODE_PRIVATE);
		SharedPreferences.Editor localEditor = shared.edit();

		localEditor.putInt(key, value);
		return localEditor.commit();
	}


    /**
     * 保存string
     *
     * @param key     the key
     * @param value   the value
     * @param context the context
     * @return boolean
     */
    public static boolean savePrefsStringValue(String key , String value, Context context) {
		SharedPreferences shared = context.getSharedPreferences(SHARED_PREFS_NAME,
				Activity.MODE_PRIVATE);
		SharedPreferences.Editor localEditor = shared.edit();

		localEditor.putString(key, value);
		return localEditor.commit();
	}

}
