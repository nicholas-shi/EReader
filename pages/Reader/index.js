import React from 'react';
import { useEffect } from 'react';
import { Button, Text, View, Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
const soundObject = new Audio.Sound();

import PageViewShell from '../../components/PageShell';

export default ReaderView = ({ filePath }) => {
    // Allows playback in silent mode
    useEffect(() => {
        const enableSound = async () => {
            console.log("Running");
            if (Platform.OS === "ios") {
                await Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true,
                });
                await soundObject.loadAsync(require('../../assets/silent.mp3'));
                await soundObject.playAsync();
            }
        };
        enableSound();
    });


    const testBtnEvent = () => {
        Speech.speak("This is some random piece of text that I want the program to speak");
    }

    return <PageViewShell>
        <Button title='Test Button' onPress={testBtnEvent} />
        <Text>Loading Page Properly</Text>
    </PageViewShell>
}