@@ .. @@
   return (
-    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
+    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
       {/* Controls Panel */}
-      <div className="lg:col-span-1 space-y-4">
+      <div className="lg:col-span-1 space-y-6">
         {/* Image Selection */}
-        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
+        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
           <div className="flex items-center gap-2 mb-3">
             <ImageIcon className="h-5 w-5 text-blue-600" />
-            <h3 className="text-base font-semibold text-gray-800">Choose Image</h3>
+            <h3 className="text-lg font-semibold text-gray-800">Choose Image</h3>
           </div>
           <ImageUpload 
             onImageSelect={setSelectedImage} 
@@ .. @@
         </div>
 
         {/* Text Controls */}
-        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
+        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
           <div className="flex items-center gap-2 mb-4">
             <Type className="h-5 w-5 text-purple-600" />
-            <h3 className="text-base font-semibold text-gray-800">Text Settings</h3>
+            <h3 className="text-lg font-semibold text-gray-800">Text Settings</h3>
           </div>
           
-          <div className="space-y-4">
+          <div className="space-y-6">
             <div>
               <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
@@ .. @@
               />
             </div>
             
-            <div className="border-t pt-4">
+            <div className="border-t border-gray-200 pt-6">
               <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 Bottom Text
@@ .. @@
         </div>
 
         {/* Action Buttons */}
-        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
+        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
           <div className="flex items-center gap-2 mb-3">
             <Palette className="h-5 w-5 text-green-600" />
-            <h3 className="text-base font-semibold text-gray-800">Actions</h3>
+            <h3 className="text-lg font-semibold text-gray-800">Actions</h3>
           </div>
           
-          <div className="grid grid-cols-2 gap-2">
+          <div className="grid grid-cols-2 gap-3">
             <button
               onClick={resetMeme}
-              className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors duration-200"
+              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200"
             >
               <RotateCcw className="h-4 w-4" />
               Reset
@@ .. @@
             <button
               onClick={downloadMeme}
               disabled={!selectedImage}
-              className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-md text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
+              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-lg text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
             >
               <Download className="h-4 w-4" />
               Download
@@ .. @@
       {/* Preview Panel */}
       <div className="lg:col-span-2">
-        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
-          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Preview</h3>
+        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 h-fit">
+          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Preview</h3>
           
           <div className="flex justify-center">
             {selectedImage ? (
               <div className="relative">
                 <canvas
                   ref={previewRef}
-                  className="max-w-full max-h-80 rounded-lg shadow-sm border border-gray-200"
+                  className="max-w-full max-h-96 rounded-lg shadow-lg border border-gray-200"
                   width={500}
                   height={500}
                 />
               </div>
             ) : (
-              <div className="w-full max-w-sm h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
+              <div className="w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                 <div className="text-center">
-                  <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
-                  <p className="text-sm text-gray-500 font-medium">Select an image to start</p>
+                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
+                  <p className="text-base text-gray-500 font-medium">Select an image to start</p>
                   <p className="text-xs text-gray-400 mt-1">Upload, template, or AI generate</p>
                 </div>
               </div>