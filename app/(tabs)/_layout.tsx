import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { IoCompassSharp, IoSearch, IoPersonSharp  } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: '#999'
    }}>
      <Tabs.Screen
  name="index"
  options={{
    tabBarIcon: ({ color }) => {
      if (Platform.OS === 'web') {
        return <IoCompassSharp size={45} color={color} />;
      } else {
        return <Ionicons name="compass" size={28} color={color} />;
      }
    },
  }}
/>
      <Tabs.Screen name='category' options={{
        tabBarIcon: ({ color }) => {
          if (Platform.OS === 'web') {
           return <MdSpaceDashboard size={45} color={color}/>
          }else {
          return <MaterialIcons name="space-dashboard" size={28} color={color} />;
        }},
      }}/>
      <Tabs.Screen
  name="search"
  options={{
    tabBarIcon: ({ color }) => (
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          paddingHorizontal: 25,
          paddingVertical: 12,
          borderRadius: 10,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {Platform.OS === 'web' ? (
          <IoSearch size={45} color={color} />
        ) : (
          <Ionicons
            name="search"
            size={28}
            color={Colors.white}
            style={{ position: 'absolute', zIndex: 1 }}
          />
        )}
      </View>
    ),
  }}
/>
      <Tabs.Screen name='bookmarks' options={{
        tabBarIcon: ({ color }) => {
          if (Platform.OS === 'web') {
            return <FaBookmark size={45} color={color} />
          }else {
          return <Ionicons name="bookmark" size={28} color={color} />;
  }},
      }}/>
      <Tabs.Screen name='profile' options={{
        tabBarIcon: ({ color }) => {
          if (Platform.OS === 'web') {
            return <IoPersonSharp size={45} color={color}/>
          }else{
          return <FontAwesome name="user" size={28} color={color} />;
        }},
      }}/>
    </Tabs>
  );
}
