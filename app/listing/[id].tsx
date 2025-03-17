import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ListingType } from "@/types/listingType";
import listingData from '@/data/destinations.json';
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { FaArrowLeft, FaDownload, FaCode, FaStar } from "react-icons/fa";
import { Colors } from "@/constants/Colors";
import { CiBookmark } from "react-icons/ci";
import { ScrollView } from "react-native";

const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ListingDetails = () => {
    const {id} = useLocalSearchParams();
    const listing:ListingType = (listingData as ListingType[]).find(
        (item) => item.id === id
    )

    const router = useRouter();
    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()} style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 10,
                    padding: 4,
                }}>
                    <View style={{backgroundColor: Colors.white, padding: 6, borderRadius: 10}}>
                    {Platform.OS === 'web' ? (
                  <FaArrowLeft size={45}/>
                  ) : (
                    <Feather name="arrow-left" size={20} />
                  )}
                  </View>
                  </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => {}} style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 10,
                    padding: 4,
                }}>
                    <View style={{backgroundColor: Colors.white, padding: 6, borderRadius: 10}}>
                    {Platform.OS === 'web' ? (
                  <CiBookmark size={45}/>
                ) : (
                  <Ionicons name="bookmark-outline" size={20} />
                  )}
                  </View>
                  </TouchableOpacity>
            )}}/>
            
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
            <Image source={{uri: listing.image}} style={styles.image} />
            <View  style={styles.contentWrapper}>
                <Text style={styles.listingName}>{listing.name}</Text>
                <View style={styles.listingLocationWrapper}>
                {Platform.OS === 'web' ? (
                            <FaDownload size={30} color={Colors.primaryColor} />
                        ) : (
                            <FontAwesome5 name="download" size={18} color={Colors.primaryColor} />
                        )}
                <Text style={styles.listingLocationTxt}>{listing.location}</Text>
                </View>

                <View style={styles.highlightWrapper}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.highlightIcon}>
                        {Platform.OS === 'web' ? (
                            <FaCode size={30} color={Colors.primaryColor} />
                        ) : (
                            <Ionicons name="code-slash-outline" size={18} color={Colors.primaryColor} />
                        )}
                        </View>
                        <View>
                            <Text style={styles.higlightTxt}>Publisher</Text>
                            <Text style={styles.higlightTxtVal}>{listing.duration}</Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.highlightIcon}>
                        {Platform.OS === 'web' ? (
                        <FaDownload size={30} color={Colors.primaryColor} />
                        ) : (
                        <FontAwesome5 name="download" size={18} color={Colors.primaryColor} />
                        )}
                        </View>
                        <View>
                            <Text style={styles.higlightTxt}>Downloaded</Text>
                            <Text style={styles.higlightTxtVal}>{listing.downloaded}</Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.highlightIcon}>
                        {Platform.OS === 'web' ? (
                        <FaStar size={45} color={Colors.primaryColor}/>
                        ) : (
                        <Ionicons name="star" size={20} color={Colors.primaryColor} />
                        )}
                        </View>
                        <View>
                            <Text style={styles.higlightTxt}>Rating</Text>
                            <Text style={styles.higlightTxtVal}>{listing.rating}</Text>
                        </View>
                        </View>
                </View>
                <Text style={styles.listingDetails}>
                    {listing.description}
                </Text>
            </View>
            </ScrollView>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}} style={[styles.footerBtn, styles.footerPlayBtn]}>
                <Text style={styles.footerBtnTxt}>Play Now</Text>    
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
                <Text style={styles.footerBtnTxt}>{listing.price}</Text>    
            </TouchableOpacity> 
        </View>
        </>
    );
}

export default ListingDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    image: {
        width: width,
        height: IMG_HEIGHT,
    },
    contentWrapper: {
        padding: 20,
    },
    listingName: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.black,
        letterSpacing: 0.5,
    },
    listingLocationWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    listingLocationTxt: {
        fontSize: 14,
        marginLeft: 5,
        color: Colors.black,
    }, 
    highlightWrapper: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    highlightIcon: {
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 5,
        alignItems: 'center',
    },
    higlightTxt: {
        fontSize: 12,
        color: '#999',
    },
    higlightTxtVal: {
        fontSize: 14,
        fontWeight: '600',
    },
    listingDetails: {
        fontSize: 16,
        color: Colors.black,
        lineHeight: 25,
    },
    footer: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 0,
        padding: 20,
        paddingBottom: 30,
        width: width,
        backgroundColor: Colors.white
    },
    footerBtn: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    footerBtnTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    footerPlayBtn: {
        flex: 2,
        backgroundColor: Colors.primaryColor,
        marginRight: 20,
    }
})