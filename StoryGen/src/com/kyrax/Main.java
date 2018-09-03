package com.kyrax;

import com.kyrax.Structure.Scene;
import com.kyrax.Structure.Story;
import com.kyrax.models.Actor;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;


public class Main {



    private static final String names = "first-names.txt";
    private static final String verbs = "verbs.txt";
    public static void main(String[] args) {
	    //create a story
        //create characters
        //give them attributes
        //make them interact with another character
        //give them options
        //show the events to form a story

        Story actionStory = new Story();
        actionStory.setName("Tst Sory");

        Scene sc1 = new Scene();

        sc1.setSceneName("Opening");

        List<Actor> sc1Actors = new ArrayList<Actor>();

        Actor actor1 = createCharacter();
        Actor actor2 = createCharacter();
        Actor actor3 = createCharacter();


        sc1Actors.add(actor1);
        sc1Actors.add(actor2);
        sc1Actors.add(actor3);

        sc1.setActorList(sc1Actors);
        List<Scene> scenesList = new ArrayList<Scene>();
        scenesList.add(sc1);

        actionStory.setSceneList(scenesList);


        Util.printJSON(actionStory);


    }

    public static Actor createCharacter(){
        String result = "";

        BufferedReader br = null;
        FileReader fr = null;
        List<String> nameList = new LinkedList<String>();

        try {

            //br = new BufferedReader(new FileReader(FILENAME));
            nameList = readNameFromFile(names,nameList);

        } catch (Exception e) {

            e.printStackTrace();

        }

        result = nameList.get(Util.randRange(1,nameList.size()));
        System.out.println(result);

        Actor act1 = new Actor();

        act1.setName(result);
        //create random attributes
        //create a bonus attribute - idea is if a bonus attribute is fighting - the actor will get +2 bonus

        return act1;
    }

    private static List<String> readNameFromFile(String FILENAME,List<String> nameList) throws IOException {
        FileReader fr;
        BufferedReader br;
        fr = new FileReader(FILENAME);
        br = new BufferedReader(fr);

        String sCurrentLine;

        while ((sCurrentLine = br.readLine()) != null) {
//                System.out.println(sCurrentLine);
            nameList.add(sCurrentLine);
        }

        return nameList;
    }


}
