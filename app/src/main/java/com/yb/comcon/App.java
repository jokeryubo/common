package com.yb.comcon;

import android.app.ActivityManager;
import android.app.Application;
import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;

import com.yanzhenjie.nohttp.InitializationConfig;
import com.yanzhenjie.nohttp.Logger;
import com.yanzhenjie.nohttp.NoHttp;
import com.yanzhenjie.nohttp.cookie.DBCookieStore;
import com.yb.common.common.HttpUtils;
import com.yb.common.http.HttpRequest;

import java.util.Iterator;
import java.util.List;

/**
 * @author yubo
 * @description:
 * @date :2019/9/10 10:04
 */
public class App extends Application {
    private static Context context;
    private static App _instance;
    @Override
    public void onCreate() {
        super.onCreate();
        context = getApplicationContext();
        if (_instance == null) {
            _instance = this;
        }
        int pid = android.os.Process.myPid();
        String processAppName = getAppName(pid);
        // 如果APP启用了远程的service，此application:onCreate会被调用2次
        // 为了防止环信SDK被初始化2次，加此判断会保证SDK被初始化1次
        // 默认的APP会在以包名为默认的process name下运行，如果查到的process name不是APP的process name就立即返回

        if (processAppName == null || !processAppName.equalsIgnoreCase(context.getPackageName())) {

            // 则此application::onCreate 是被service 调用的，直接返回
            return;
        }
        InitializationConfig config = InitializationConfig.newBuilder(getApplicationContext())
                // 配置网络层，默认URLConnectionNetworkExecutor，如果想用OkHttp：OkHttpNetworkExecutor。
//                    .networkExecutor(new OkHttpNetworkExecutor())
                .addHeader("version", HttpUtils.VERSION)
                .addHeader("ak", HttpUtils.KEY)
                .connectionTimeout(30 * 1000)
//                .interceptor(new TokenInterceptor())
                .cookieStore(new DBCookieStore(this).setEnable(false))
                .readTimeout(30 * 1000)
                .build();
        Logger.setDebug(BuildConfig.debug);
        Logger.setTag("kuaiKuai"); // 设置NoHttp打印Log的TAG。
        NoHttp.initialize(config);
    }
    public static Context getContext() {
        return context;
    }
    private String getAppName(int pID) {
        String processName = null;
        ActivityManager am = (ActivityManager) this.getSystemService(ACTIVITY_SERVICE);
        List l = am.getRunningAppProcesses();
        Iterator i = l.iterator();
        PackageManager pm = this.getPackageManager();
        while (i.hasNext()) {
            ActivityManager.RunningAppProcessInfo info = (ActivityManager.RunningAppProcessInfo) (i.next());
            try {
                if (info.pid == pID) {
                    processName = info.processName;
                    return processName;
                }
            } catch (Exception e) {
                // Log.d("Process", "Error>> :"+ e.toString());
            }
        }
        return processName;
    }
}
