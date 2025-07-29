import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { NativeModules } from 'react-native';

function DeviceNameScreen() {
    const [deviceName, setDeviceName] = useState('');

    const fetchDeviceName = async () => {
        const name = await NativeModules.DeviceInfoModule.getDeviceName();
        setDeviceName(name);
    };

    const clearDeviceName = () => {
        setDeviceName('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Device Name: {deviceName || 'Press Get Device Name to load'}</Text>
            <TouchableOpacity
                onPress={fetchDeviceName}
                style={styles.primaryButtonContainer}>
                <Text>Get Device Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={clearDeviceName}
                style={styles.secondaryButtonContainer}>
                <Text>Clear Device Name</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default DeviceNameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButtonContainer: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        marginTop: 20,
        width: '40%',
        alignItems: 'center',
    },
    secondaryButtonContainer: {
        padding: 10,
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginTop: 5,
        width: '40%',
        alignItems: 'center',

    },
})
