goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.string.StringBuffer', 'goog.object', 'goog.array']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['cljs.core', 'goog.string']);
goog.addDependency("../logger.js", ['logger'], ['cljs.core', 'goog.debug', 'goog.debug.DivConsole', 'goog.debug.Logger', 'goog.debug.LogManager', 'goog.debug.Logger.Level', 'goog.dom']);
goog.addDependency("../websocket.js", ['websocket'], ['cljs.core', 'logger', 'goog.events', 'goog.net.WebSocket', 'goog.net.WebSocket.EventType', 'goog.net.WebSocket.MessageEvent']);
goog.addDependency("../state.js", ['state'], ['cljs.core', 'logger', 'goog.dom']);
goog.addDependency("../client.js", ['client'], ['cljs.core', 'websocket', 'goog.events', 'goog.events.EventHandler', 'cljs.reader', 'goog.dom', 'clojure.string', 'state', 'logger', 'goog.dom.classes', 'goog.events.EventType', 'goog.ui.LabelInput', 'goog.ui.AnimatedZippy', 'goog.ui.Tooltip']);
