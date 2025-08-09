@@ .. @@
   return (
-    <div className="space-y-3">
+    <div className="space-y-4">
       {/* Tab Buttons */}
-      <div className="grid grid-cols-3 bg-gray-100 rounded-md p-0.5">
+      <div className="grid grid-cols-3 bg-gray-100 rounded-lg p-1">
         <button
           onClick={() => setActiveTab('upload')}
-          className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors ${
+          className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
             activeTab === 'upload'
               ? 'bg-white text-blue-600 shadow-sm'
               : 'text-gray-600 hover:text-gray-800'
@@ .. @@
         </button>
         <button
           onClick={() => setActiveTab('templates')}
-          className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors ${
+          className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
             activeTab === 'templates'
               ? 'bg-white text-blue-600 shadow-sm'
               : 'text-gray-600 hover:text-gray-800'
@@ .. @@
         </button>
         <button
           onClick={() => setActiveTab('ai')}
-          className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors ${
+          className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
             activeTab === 'ai'
               ? 'bg-white text-purple-600 shadow-sm'
               : 'text-gray-600 hover:text-gray-800'
@@ .. @@
           <button
             onClick={() => fileInputRef.current?.click()}
-            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-400 hover:bg-blue-50 transition-colors group"
+            className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
           >
-            <Upload className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mx-auto mb-1" />
-            <p className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">
+            <Upload className="h-8 w-8 text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
+            <p className="text-sm text-gray-600 group-hover:text-blue-600 font-medium mb-1">
               Click to upload image
             </p>
             <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
@@ .. @@
 
       {activeTab === 'templates' && (
-        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
+        <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
           {MEME_TEMPLATES.map((template, index) => (
             <button
               key={index}
               onClick={() => handleTemplateSelect(template.url)}
-              className="relative group overflow-hidden rounded-md border border-gray-200 hover:border-blue-400 transition-colors"
+              className="relative group overflow-hidden rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
             >
               <img
                 src={template.url}
                 alt={template.name}
-                className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-200"
+                className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
               />
               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
-                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-1.5 py-0.5 rounded">
+                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-2 py-1 rounded">
                   {template.name}
                 </span>
               </div>