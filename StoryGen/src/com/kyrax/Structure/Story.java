package com.kyrax.Structure;

import java.util.List;

public class Story {
    String name;
    List<Scene> sceneList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Scene> getSceneList() {
        return sceneList;
    }

    public void setSceneList(List<Scene> sceneList) {
        this.sceneList = sceneList;
    }
}
