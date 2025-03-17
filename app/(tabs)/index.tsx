import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import React, { useState } from 'react';
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements"
import { IoIosNotifications, IoMdOptions  } from "react-icons/io";
import { TextInput } from "react-native";
import { CiSearch } from "react-icons/ci";
import CategorieButtons from "@/components/CategorieButtons";
import Listings from "@/components/Listings";
import listingData from '@/data/destinations.json';
import GroupListings from "@/components/GroupListing";
import groupData from '@/data/groups.json';
import { ScrollView } from "react-native";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const [category, setCategory] = useState('All')
  const onCatChanged = (category: string) => {
    setCategory(category);
  }

  return (
    <>
    <Stack.Screen
  options={{
    headerTransparent: true,
    headerTitle: "",
    headerLeft: () => (
      <TouchableOpacity onPress={() => {}} style={{marginLeft: 10}}>
        <Image
          source={{ uri: "https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png" }}
          style={{ width: 60, height: 60 }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => {
      return <TouchableOpacity
        onPress={() => {} } style={{
          marginRight: 10,
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          {Platform.OS === 'web' ? (
                  <IoIosNotifications size={45} color={Colors.black}/>
                  ) : (
                    <Ionicons name="notifications" size={20} color={Colors.black} />
                  )}
          
        </TouchableOpacity>;
    }
  }}
/>
  <View style={[styles.container, {paddingTop: headerHeight}]}>
  <ScrollView showsVerticalScrollIndicator={false}>
  <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
  
  <View style={styles.searchSectionWwapper}>
    <View style={styles.searchBar}>
    {Platform.OS === 'web' ? (
        <CiSearch size={45} style={{marginRight: 5}} color={Colors.black}/>
      ) : (
        <Ionicons name="search" size={18} style={{marginRight: 5}}/>
      )}
      <TextInput placeholder="Search..."/>
      
    </View>
    <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
    {Platform.OS === 'web' ? (
        <IoMdOptions size={45} color={Colors.white}/>
      ) : (
        <Ionicons name="options" size={18} color={Colors.white}/>
      )}
    </TouchableOpacity>
  </View>

  <CategorieButtons onCagtegoryChanged={onCatChanged} />
  
  <Listings listingData={listingData} category={category} />
  
  <GroupListings listing={groupData}/>
  </ScrollView>
  </View>
  </>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWwapper: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  }
})