package com.kyrax.Generator;

import java.util.HashSet;
import java.util.Set;

public class Gen {

    final String lexicon = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345674890";
    final String char_lexicon = "BCDFGHJKLMNPQRSTVWXYZ";
    final String vowels_lexicon = "AEIOU";

    final java.util.Random rand = new java.util.Random();

    // consider using a Map<String,Boolean> to say whether the identifier is being used or not
    final Set<String> identifiers = new HashSet<String>();

    public String randomIdentifier() {
        StringBuilder builder = new StringBuilder();
        while(builder.toString().length() == 0) {
            int length = rand.nextInt(5) + 4;
            for(int i = 0; i < length; i++) {
                if(i % 2 != 0){
                    builder.append(vowels_lexicon.charAt(rand.nextInt(vowels_lexicon.length())));
                }else{
                    builder.append(char_lexicon.charAt(rand.nextInt(char_lexicon.length())));
                }

            }
            if(identifiers.contains(builder.toString())) {
                builder = new StringBuilder();
            }
        }
        return builder.toString();
    }

    public static int calcFateValue(int val){

        int fateValue = 0;

        switch (val){
            case 0:
                fateValue=-1;
                break;
            case 1:
                fateValue=0;
                break;
            case 2:
                fateValue=1;
                break;
            case 3:
                fateValue=3;
                break;
        }

        return fateValue;
    }

    public static void main(String[] args) {
        Gen gen = new Gen();

        for(int i = 0; i < 5; i++) {
            String result = gen.randomIdentifier();
            System.out.println(result);
        }
    }
}
