package com.kyrax.Structure;

import com.kyrax.models.Actor;

import java.util.List;

public class Scene {
    String sceneName;
    List<Actor> actorList;
    List<String> actionList;
    String sceneSummary;

    public List<String> getActionList() {
        return actionList;
    }

    public void setActionList(List<String> actionList) {
        this.actionList = actionList;
    }

    public String getSceneName() {
        return sceneName;
    }

    public void setSceneName(String sceneName) {
        this.sceneName = sceneName;
    }

    public List<Actor> getActorList() {
        return actorList;
    }

    public void setActorList(List<Actor> actorList) {
        this.actorList = actorList;
    }

    public String getSceneSummary() {
        return sceneSummary;
    }

    public void setSceneSummary(String sceneSummary) {
        this.sceneSummary = sceneSummary;
    }
}
