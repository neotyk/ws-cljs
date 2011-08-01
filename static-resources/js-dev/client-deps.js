goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.string.StringBuffer', 'goog.object', 'goog.array']);
goog.addDependency("../logger.js", ['logger'], ['cljs.core', 'goog.debug', 'goog.debug.DivConsole', 'goog.debug.Logger', 'goog.debug.LogManager', 'goog.debug.Logger.Level', 'goog.dom']);
goog.addDependency("../websocket.js", ['websocket'], ['cljs.core', 'logger', 'goog.events', 'goog.net.WebSocket', 'goog.net.WebSocket.EventType', 'goog.net.WebSocket.MessageEvent']);
goog.addDependency("../client.js", ['client'], ['cljs.core', 'websocket', 'goog.events', 'goog.events.EventHandler', 'goog.dom', 'logger', 'goog.events.EventType', 'goog.ui.LabelInput', 'goog.ui.AnimatedZippy', 'goog.ui.Tooltip']);
