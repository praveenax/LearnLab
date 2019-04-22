package com.kyrax;

import com.kyrax.kingdom.Kingdom;

import java.util.ArrayList;
import java.util.List;

public class NationStory {

    public static Kingdom createKingdom(int i){

        Kingdom domObj = new Kingdom();
        domObj.setName("Test#"+i);
        domObj.setEcPower(3);
        domObj.setOffPower(1);
        domObj.setDefPower(1);
        domObj.setCulPower(1);
//        System.out.println(domObj.toString());
        return domObj;
    }

    public static List<Kingdom> generateKingdoms(int n){
        //create a kingdom
        List<Kingdom> domList = new ArrayList<Kingdom>();
        for(int i=0;i<n;i++){
            domList.add(createKingdom(i));
        }


        return domList;
    }

    public static void main(String[] args) {
        //create kingdoms
        //simulate turns
        //each turn - first card tells u - Good/Neutral/Bad Times - General Bonus
        //then for each kingdom - a GNB is raised.
        //the powers are recallibrated
        //ecPower - lets you buy buildings to increase bonuses
        //defPower - lets you increase the security - people x defPower
        //offPwer - will let you decrease other kingdom's defPower
        //culPwer - will add people to kingdom

        List<Kingdom> kingdomList =  generateKingdoms(3);
//        System.out.println(kingdomList.toString());
        Util.printJSON(kingdomList);
    }
}
