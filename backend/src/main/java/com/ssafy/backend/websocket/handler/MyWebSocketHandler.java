package com.ssafy.backend.websocket.handler;


import com.ssafy.backend.websocket.application.BinaryMessageService;
import com.ssafy.backend.websocket.application.TextMessageService;
import com.ssafy.backend.websocket.dao.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

@Component
public class MyWebSocketHandler extends AbstractWebSocketHandler {

    @Autowired
    private BinaryMessageService binaryMessageService;
    @Autowired
    private TextMessageService textMessageService;

    @Override
    protected void handleBinaryMessage(WebSocketSession session, BinaryMessage message) throws Exception {
        // 필요에 따라 응답 보내기
//         session.sendMessage(new BinaryMessage("response".getBytes()));
//        if (binaryMessageService==null) System.out.println(11);
        binaryMessageService.binaryMessageProcessing(session, message);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        textMessageService.textMessageProcessing(session, message);
    }
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("Connection established");
        SessionRepository.sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("Connection closed: " + status);
        if (SessionRepository.sessions.remove(session)){
//            System.out.println("close");
        }
    }


}