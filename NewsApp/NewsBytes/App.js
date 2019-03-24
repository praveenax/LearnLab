import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";



class HomeScreen extends React.Component {
    drawNews(item){
//        items.map(function(item,index){
            return (
                <View style={{}}>
                    <Text>{item}</Text>
                </View>
            )
//        })
        
    }
    
  render() {
       var news_arr = ["News 1","News 2","News 3"]
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         {this.drawNews(news_arr[0])}
            {this.drawNews(news_arr[1])}
            {this.drawNews(news_arr[2])}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
    
   
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);
