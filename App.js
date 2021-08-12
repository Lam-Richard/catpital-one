import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { DashboardScreen } from './screens/DashboardScreen';
import { StockScreen } from './screens/StockScreen';

const capitalOne = {
  company: 'Capital One',
  ticker: 'COF',
  lastPrice: 174.55,
  lastChange: 3.91,
  percentChange: 2.29,
  upDown: '+',
  shares: 100,
  boughtPrice: 8.31,
}




export default function App () {
  return <StockScreen data={capitalOne}></StockScreen>
}

