@@ .. @@
   return (
    <div className="space-y-6">
-    <div className="space-y-3">
+    <div className="space-y-4">
       {/* Text Input */}
       <div>
        <label className="block text-sm font-bold text-gray-700 mb-3">
+        <label className="block text-xs font-medium text-gray-700 mb-2">
           Text Content
         </label>
         <input
   )
@@ .. @@
           value={text.content}
           onChange={(e) => updateText({ content: e.target.value })}
           placeholder={placeholder}
          className="w-full px-4 py-3 text-sm border border-gray-300/60 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md bg-gray-50/50 focus:bg-white"
+          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
         />
       </div>
 
       {/* Font Size */}
       <div>
        <label className="block text-sm font-bold text-gray-700 mb-3">
+        <label className="block text-xs font-medium text-gray-700 mb-2">
           Font Size: {text.fontSize}px
         </label>
         <input
@@ .. @@
           max="80"
           value={text.fontSize}
           onChange={(e) => updateText({ fontSize: parseInt(e.target.value) })}
-          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full appearance-none cursor-pointer shadow-inner hover:shadow-md transition-all"
         />
       </div>
 
       {/* Colors */}
-      <div className="grid grid-cols-2 gap-3">
+      <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-6">
-          <label className="block text-xs font-medium text-gray-700 mb-1">
          <label className="block text-sm font-bold text-gray-700 mb-3">
             Text Color
           </label>
-          <div className="flex items-center gap-1">
          <div className="flex items-center gap-3">
             <input
               type="color"
               value={text.color}
               onChange={(e) => updateText({ color: e.target.value })}
-              className="w-8 h-8 rounded-md border border-gray-300 cursor-pointer"
              className="w-12 h-10 rounded-xl border-2 border-gray-300/60 cursor-pointer shadow-md hover:shadow-lg transition-all"
             />
             <input
               type="text"
               value={text.color}
               onChange={(e) => updateText({ color: e.target.value })}
              className="flex-1 px-3 py-2 text-xs border border-gray-300/60 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md bg-gray-50/50 focus:bg-white transition-all"
+              className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
             />
           </div>
         </div>
 
         <div>
-          <label className="block text-xs font-medium text-gray-700 mb-1">
          <label className="block text-sm font-bold text-gray-700 mb-3">
             Outline Color
           </label>
          <div className="flex items-center gap-3">
+          <div className="flex items-center gap-2">
             <input
               type="color"
               value={text.stroke}
               onChange={(e) => updateText({ stroke: e.target.value })}
              className="w-12 h-10 rounded-xl border-2 border-gray-300/60 cursor-pointer shadow-md hover:shadow-lg transition-all"
+              className="w-10 h-8 rounded-lg border border-gray-300 cursor-pointer"
             />
             <input
               type="text"
               value={text.stroke}
               onChange={(e) => updateText({ stroke: e.target.value })}
              className="flex-1 px-3 py-2 text-xs border border-gray-300/60 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md bg-gray-50/50 focus:bg-white transition-all"
+              className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
             />
           </div>
         </div>
@@ .. @@
 
       {/* Stroke Width */}
        <label className="block text-sm font-bold text-gray-700 mb-3">
-        <label className="block text-xs font-medium text-gray-700 mb-1">
+        <label className="block text-xs font-medium text-gray-700 mb-2">
           Outline Width: {text.strokeWidth}px
         </label>
         <input
@@ .. @@
           max="8"
           value={text.strokeWidth}
           onChange={(e) => updateText({ strokeWidth: parseInt(e.target.value) })}
-          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full appearance-none cursor-pointer shadow-inner hover:shadow-md transition-all"
         />
       </div>
 
       {/* Position */}
       <div>
        <label className="block text-sm font-bold text-gray-700 mb-3">
+        <label className="block text-xs font-medium text-gray-700 mb-2">
           Vertical Position: {text.y}%
         </label>
         <input
@@ .. @@
           max="95"
           value={text.y}
           onChange={(e) => updateText({ y: parseInt(e.target.value) })}
-          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full appearance-none cursor-pointer shadow-inner hover:shadow-md transition-all"
         />
       </div>
     </div>