import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {


    return (
        <Modal visible={props.visible} animationType="slide">
            <View>
                <TextInput />

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({


});

export default GoalInput;