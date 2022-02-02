import React, {FC} from "react";
import {View, Text, StyleSheet} from "react-native";
import {MessageType} from "../../api/dialogs-api";
import {s_getCurrentUserId} from "../../redux/auth-selectors";
import {useSelector} from "react-redux";

export const Message: FC<{ message: MessageType }> = ({message}) => {
    const currentUserId = useSelector(s_getCurrentUserId);

    const isMyMessage = (userId: number) => {
        return currentUserId === userId
    }

    return (
        <View style={[s.wrapper, isMyMessage(message.user.id) ? s.myMessage : s.othersMessage]}>
            <Text style={[s.text, s.messageText]}>{message.messageText}  </Text>
            <Text style={[s.text, s.small]}>{message.dateCreate.toString().substr(11, 5)}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        maxWidth: '80%',
        marginVertical: 3,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    myMessage: {
        alignSelf: 'flex-end',
        borderBottomRightRadius: 0,
        backgroundColor: '#2a2a2a',
    },
    othersMessage: {
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
    },
    text: {
        color: 'white',
    },
    small: {
        fontSize: 10,
    },
    messageText: {
        maxWidth: '90%',
    }
})