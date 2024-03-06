package com.ssafy.backend.websocket.domain;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public enum ReceiveBinaryMessageType {
    RECEIVE_DIRECTION((byte) 0),
    RECEIVE_JUMP((byte) 1),
    TEST_START((byte) 126),
    TEST_LOGIN((byte) 127);

    private final byte value;

    private static final Map<Byte, ReceiveBinaryMessageType> map = new HashMap<>();

    ReceiveBinaryMessageType(byte value) {
        this.value = value;
    }

    static {
        for (ReceiveBinaryMessageType messageType : ReceiveBinaryMessageType.values()) {
            map.put(messageType.value, messageType);
        }
    }

    public static ReceiveBinaryMessageType valueOf(byte value) {
        ReceiveBinaryMessageType result = map.get(value);
        if (result == null) {
//            throw new IllegalArgumentException("No enum constant for value: " + value);
        }
        return result;
    }

}
