import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default PageShellView = ({ children }) => {
    
    return <View>
        <StatusBar />
        <SafeAreaView>
            { children }
        </SafeAreaView>
    </View>
}