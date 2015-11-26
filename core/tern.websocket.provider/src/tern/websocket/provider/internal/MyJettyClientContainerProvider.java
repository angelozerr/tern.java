package tern.websocket.provider.internal;

import javax.websocket.WebSocketContainer;

import org.eclipse.jetty.websocket.jsr356.ClientContainer;

import tern.server.WebSocketContainerProvider;

public class MyJettyClientContainerProvider extends WebSocketContainerProvider
{
    @Override
    protected WebSocketContainer getContainer()
    {
        ClientContainer container = new ClientContainer();
        try
        {
            container.start();
            return container;
        }
        catch (Exception e)
        {
            throw new RuntimeException("Unable to start Client Container",e);
        }
    }
}
