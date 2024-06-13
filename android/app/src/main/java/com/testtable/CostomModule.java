package com.testtable;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CostomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    CostomModule(ReactApplicationContext context){
        super(context);
    }

    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hii i am from android", Toast.LENGTH_SHORT).show();
    }

    @NonNull
    @Override
    public String getName() {
        return "ABC";
    }
}
