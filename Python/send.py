#!/usr/bin/python
# python send.py 112
import sys

from websocket import create_connection
ws = create_connection("ws://serveraddresshere:8080")
ws.send(str(sys.argv[1]))
ws.close()
