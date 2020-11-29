import React from "react";
import {Text, View, Dimensions} from "react-native";
 import {SwipeListView} from "react-native-swipe-list-view";
import db from "../config";
import {ListItem, Icon} from "react-native-elements";

export default class SwipableFlatlist extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           allNotfications : this.props.allNotfications
       }
   }

   updateMarkAsRead = (notification)=>{
       db.collection("all_notifications").doc(notification.doc_id).update({
           "notification_status":"Read"
       })
   }
    onSwipeValueChange = swipeData => {
   var allNotifications = this.state.allNotfications;
   const {key,value} = swipeData;
   if (value<-Dimensions.get("window").width){
       const newData =  [...allNotifications];
       const prevIndex = allNotifications.findIndex(item=>item.key===key);
       this.updateMarkAsRead(allNotifications[prevIndex]);
       newData.splice(prevIndex,1);
       this.setState({
           allNotifications:newData
       })
   }

    }

    renderItem =data=>(<ListItem
    leftElement = {<Icon
    name = "book"
    type = "font-awesome"
    color = "Red"/>}
    title = {Data.item.book_name}/>)
    render(){
     return(
         <View>
             <Text>
                 SwipableFlatList
             </Text>
         </View>
     )   
    }
}