package com.kyrax;

import java.util.Random;
import com.google.gson.Gson;


public  class Util {



    public static void print(String msg){
        System.out.println(msg);
    }

    public static void printJSON(Object obj){
        Gson gson = new Gson();
        String jsonInString = gson.toJson(obj);
        System.out.println(jsonInString);
    }

    public static int randRange(int min,int max){
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }
}
