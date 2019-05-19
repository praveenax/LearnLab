import React from 'react';
import {Button, StyleSheet, Text, View,ScrollView,Image,Linking,ActivityIndicator } from 'react-native';

export default class Headlines extends React.Component {
    
     static navigationOptions = {
        title:'NewsBytes'
      };

    constructor(props){
        super(props);
         this.state={
             hits:[]
         }
    }

    openArticle(url){
        Linking.openURL(url)
    }
    drawNews(items){
        console.log("items",items.length);
        var all_items = [];
        items.map(function(item,index){
            console.log(item['title']);
            all_items.push(
                
                <View key={index} style={{width:"95%",padding:10,borderWidth:2,borderColor:'#ecf0f1',alignSelf:'center',margin:6,borderRadius:8,backgroundColor:"#fff"}}>
                    <View style={{flex:1}}>
                    <Image
                      style={{width: "100%", height: 200,alignSelf:'center'}}
                      source={{uri: item.urlToImage}}
                    />
                    </View>
                    
                    <Text style={{alignSelf:'stretch',textAlign: 'left',fontSize: 24,marginTop:20,marginBottom:10}}>{item.title}</Text>
                    
                    <Text style={{alignSelf:'stretch',textAlign: 'left',fontSize: 14,marginTop:10,marginBottom:10}}>{item.description}</Text>
                    
                    <Button
                          onPress={() => {Linking.openURL(item.url)}}
                          title="Learn More"
                          color="#3498db"
                          accessibilityLabel=""
                        />
                </View>
               
              
            )
        })
        
        return all_items;
        
    }

componentDidMount(){
     return fetch('https://newsapi.org/v2/top-headlines?' +
         'country=us&' +
         'apiKey=4ab6a9f2a41c49758704a0293ab1b7f5')
       .then((response) => {
//         console.log(response.json());
         return response.json()
     })
       .then((responseJson) => {
         
         this.setState({
             hits:responseJson['articles']
         })
         
//         console.log(this.state.news_arr.length);
//         var keys = Object.keys(responseJson['articles']);
//         console.log(keys);
//         
//         keys = Object.keys(this.state.news_arr);
//         console.log(keys);
       //  console.log(keys.length);
 
       })
       .catch((error) =>{
         console.error(error);
       });
    }
    
  render() {
//      const { hits } = this.state;
      console.log(hits);
      
     var hits = [
    {
      "source": {
        "id": "the-new-york-times",
        "name": "The New York Times"
      },
      "author": null,
      "title": "Mueller Report Live Updates: No Trump-Russia Conspiracy - The New York Times",
      "description": "The attorney general, William Barr, and his team are preparing a summary of the special counsel’s report for Congress.",
      "url": "https://www.nytimes.com/2019/03/24/us/politics/mueller-report-live-updates.html",
      "urlToImage": "https://static01.nyt.com/images/2019/03/24/us/24dc-briefing-1/merlin_152554800_a0454f46-7780-4cf5-b99f-2033dc6d98b1-facebookJumbo.jpg",
      "publishedAt": "2019-03-24T19:56:56Z",
      "content": "While Robert S. Mueller III did not take a position on whether Mr. Trump committed obstruction and explicitly said his report did not exonerate the president, Attorney General William P. Barr said that he and Rod J. Rosenstein, the deputy attorney general who… [+1060 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Macrumors.com"
      },
      "author": "Joe Rossignol",
      "title": "WSJ on Apple's Video Service: Starz, Showtime, and HBO to Cost $9.99 Per Month, Roku May Gain Apple TV App - Mac Rumors",
      "description": "The Wall Street Journal has outlined its expectations for Apple's media event tomorrow at Steve Jobs Theater, where the company is expected to...",
      "url": "https://www.macrumors.com/2019/03/24/wsj-apple-video-service-preview/",
      "urlToImage": "https://cdn.macrumors.com/article-new/2019/03/hbo-now-apple.jpg?retina",
      "publishedAt": "2019-03-24T19:37:00Z",
      "content": "The Wall Street Journal has outlined its expectations for Apple's media event tomorrow at Steve Jobs Theater, where the company is expected to introduce subscription-based services for movies and TV shows, magazines and newspapers, and possibly games. The key… [+2946 chars]"
    }];
      
      
//       var news_arr = ["News 1","News 2","News 3","News 4","News 5","News 6","News 7","News 8","News 9","News 10","News 11","News 12","News 13","News 14","News 15","News 16","News 17","News 18","News 19","News 20","News 1","News 2","News 3","News 3"]
//        var news_arr = this.state.news_arr;
//     console.log("RENDER CALLED  >> "+this.state.hits.length);
      
      if(this.state.hits.length >0){
         
         
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center",flexDirection: 'row',
          flexWrap: 'wrap',backgroundColor:'#ecf0f1' }}>
            <ScrollView >

             {this.drawNews(this.state.hits)}


            </ScrollView>
          </View>
        );
      
  }else{

    return(
         <View style={{ flex: 1, alignItems: "center", justifyContent: "center",flexDirection: 'row',
      flexWrap: 'wrap',backgroundColor:'#ecf0f1' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
  }
  }
}