package com.kyrax.models;

import java.util.ArrayList;
import java.util.List;

public class Actor {
    String name;
    Attributes attributes;
    List<Actor> knownActors;
    List<Actor> friendlyActors;
    List<Actor> enemyActors;


    public Actor(){


    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Attributes getAttributes() {
        return attributes;
    }

    public void setAttributes(Attributes attributes) {
        this.attributes = attributes;
    }

    public List<Actor> getKnownActors() {
        return knownActors;
    }

    public void setKnownActors(List<Actor> knownActors) {
        this.knownActors = knownActors;
    }

    public List<Actor> getFriendlyActors() {
        return friendlyActors;
    }

    public void setFriendlyActors(List<Actor> friendlyActors) {
        this.friendlyActors = friendlyActors;
    }

    public List<Actor> getEnemyActors() {
        return enemyActors;
    }

    public void setEnemyActors(List<Actor> enemyActors) {
        this.enemyActors = enemyActors;
    }
}
