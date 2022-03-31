import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function DisplayComponent(props){

    const renderList = ({list}) => {
        if(list){
            return list.map((item) =>{
                return (
                    <View key={item._id}>
                         <Image
                            style={styles.logo}
                            source={{
                            uri: item.restaurant_thumb,
                            }}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
            
        }
    }
    return(
        <View>
            <ScrollView style={styles.scrollView}>
            {renderList(props)}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 100
    },
    scrollView: {
        backgroundColor: 'gray',
    },
    logo: {
        width: 166,
        height: 158,
      }
  });


export default DisplayComponent;