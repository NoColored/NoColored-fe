package com.ssafy.backend.websocket.domain;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public enum SendBinaryMessageType {

    START((byte) 0),
    PHYSICS_STATE((byte) 1),
    GAME_END((byte) 2);

    private final byte value;
    private static final Map<Byte, SendBinaryMessageType> map = new HashMap<>();

    SendBinaryMessageType(byte value) {
        this.value = value;
    }
    static {
        for (SendBinaryMessageType messageType : SendBinaryMessageType.values()) {
            map.put(messageType.value, messageType);
        }
    }
    public static SendBinaryMessageType valueOf(byte value) {
        SendBinaryMessageType result = map.get(value);
        if (result == null) {
//            throw new IllegalArgumentException("No enum constant for value: " + value);
        }
        return result;
    }

}
