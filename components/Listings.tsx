import { Colors } from "@/constants/Colors";
import { ListingType } from "@/types/listingType";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FaBookmark, FaDownload } from "react-icons/fa";
import { StyleSheet, View, Text, ListRenderItem, TouchableOpacity, Platform, Image } from "react-native";
import { FlatList } from "react-native";

type Props = {
    listingData: any[];
    category: string;

};

const Listings = ({ listingData, category }: Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [listingData, category]);

    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        return (
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                <View style={styles.item}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.bookmarkContainer}>
                        {Platform.OS === 'web' ? (
                            <FaBookmark size={30} color={Colors.white} />
                        ) : (
                            <Ionicons
                                name="bookmark-outline"
                                size={20}
                                color={Colors.white}
                                style={styles.bookmark}
                            />
                        )}
                    </View>
                    <Text style={styles.itemTxt} ellipsizeMode="tail" numberOfLines={1}>{item.name}</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {Platform.OS === 'web' ? (
                            <FaDownload size={30} color={Colors.primaryColor} />
                        ) : (
                            <FontAwesome5 name="download" size={18} color={Colors.primaryColor} />
                        )}
                    <Text style={styles.itemLocationTxt}>{item.location}</Text>
                    </View>
                    <Text style={styles.itemPriceTxt}>{item.price}</Text>
                </View></View>
            </TouchableOpacity>
            </Link>
        );
    };

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={loading ? [] : listingData}
                renderItem={renderItems}
            />
        </View>
    );
};

export default Listings;

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    bookmarkContainer: {
        position: 'absolute',
        top: 175,
        right: 20,
        zIndex: 10,
    },
    bookmark: {
        backgroundColor: Colors.primaryColor,
        padding: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
        marginTop: 7,
    },
    itemLocationTxt: {
        fontSize: 12,
        marginLeft: 5,
    },
    itemPriceTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.primaryColor,
    }
});
