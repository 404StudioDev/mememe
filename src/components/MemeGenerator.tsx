@@ .. @@
   return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
+    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
       {/* Controls Panel */}
      <div className="lg:col-span-1 space-y-8">
+      <div className="lg:col-span-1 space-y-6">
         {/* Image Selection */}
-        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
              <ImageIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Choose Image</h3>
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
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <Type className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Text Settings</h3>
-            <h3 className="text-base font-semibold text-gray-800">Text Settings</h3>
+            <h3 className="text-lg font-semibold text-gray-800">Text Settings</h3>
              <h4 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-sm"></div>
-          <div className="space-y-4">
          <div className="space-y-8">
             <div>
               <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
@@ .. @@
               />
             </div>
             
-            <div className="border-t pt-4">
            <div className="border-t border-gray-200/60 pt-8">
              <h4 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-sm"></div>
                 Bottom Text
@@ .. @@
         </div>
 
         {/* Action Buttons */}
-        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
+        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
           <div className="flex items-center gap-2 mb-3">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
              <Palette className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Actions</h3>
           </div>
           
-          <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-4">
             <button
               onClick={resetMeme}
-              className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors duration-200"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
             >
               <RotateCcw className="h-4 w-4" />
               Reset
@@ .. @@
             <button
               onClick={downloadMeme}
               disabled={!selectedImage}
-              className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-md text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-xl text-sm font-bold transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
             >
               <Download className="h-4 w-4" />
               Download
@@ .. @@
       {/* Preview Panel */}
       <div className="lg:col-span-2">
-        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
-          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Preview</h3>
+        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 h-fit">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-200/50 h-fit hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center tracking-tight">Live Preview</h3>
           <div className="flex justify-center">
             {selectedImage ? (
               <div className="relative">
                 <canvas
                   ref={previewRef}
                  className="max-w-full max-h-96 rounded-2xl shadow-2xl border border-gray-200/60"
+                  className="max-w-full max-h-96 rounded-lg shadow-lg border border-gray-200"
                   width={500}
                   height={500}
                 />
               </div>
             ) : (
              <div className="w-full max-w-md h-72 border-2 border-dashed border-gray-300/60 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100/50">
+              <div className="w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                 <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 inline-block">
                    <ImageIcon className="h-16 w-16 text-gray-400 mx-auto" />
                  </div>
                  <p className="text-lg text-gray-500 font-bold mb-2">Select an image to start</p>
                  <p className="text-sm text-gray-400 font-medium">Upload, template, or AI generate</p>
+                  <p className="text-base text-gray-500 font-medium">Select an image to start</p>
                   <p className="text-xs text-gray-400 mt-1">Upload, template, or AI generate</p>
                 </div>
               </div>