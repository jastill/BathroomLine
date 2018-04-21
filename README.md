# BathroomLine

Bathhroom Line Helper Code

![alt iPhone App](https://raw.githubusercontent.com/jastill/BathroomLine/master/images/iPhoneApp.png)

## Architecture

The data sent from raspberry Pi (Python) needs to be distributed to other applications.

Assuming that the data is tranisitional (not needed to be stored in a database), ussing a simple webscocket echo client can help.

In this example a node.js websocket server is running on a cloud server on port 8080, all messages sent by one client are received by the other client.

## Node JS Server

This is a very simple example that echos the data it receives to all clients that have connected to it. This needs to run on a server that the iPhone can connect too.

## Python Client

The Python Client is a simple code snippet that sends data to the server.

## iPhone App

The iPhone app is a bare bones app that connects to the websocket and posts the received number on the bathroom door. It makes use of the Starscream websocket library.

You will need a Mac and XCode to build the iPhone app.
