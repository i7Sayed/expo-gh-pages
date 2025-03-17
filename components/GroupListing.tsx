import { Colors } from "@/constants/Colors";
import { GroupType } from "@/types/groupType";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FaStar } from "react-icons/fa";
import { StyleSheet, View, Text, ListRenderItem, TouchableOpacity, Platform, Image } from "react-native";
import { FlatList } from "react-native";

const GroupListings = ({listing}: {listing: GroupType[]}) => {
    console.log(listing);
    const renderItem:ListRenderItem<GroupType> = ({item}) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.itemTxt}>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {Platform.OS === 'web' ? (
                        <FaStar size={45} color={Colors.primaryColor}/>
                        ) : (
                        <Ionicons name="star" size={20} color={Colors.primaryColor} />
                        )}
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        );
    }
    
    return (
            <View style={{marginVertical: 20}}>
                <Text style={styles.title}>Top Games</Text>
                <FlatList data={listing}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
    );
};

export default GroupListings;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
    },
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 5,
    },
    itemReviews: {
        fontSize: 14,
        color: '#999'
    }
});
