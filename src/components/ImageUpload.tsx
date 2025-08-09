@@ .. @@
   return (
    <div className="space-y-6">
-    <div className="space-y-3">
+    <div className="space-y-4">
       {/* Tab Buttons */}
      <div className="grid grid-cols-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1.5 shadow-inner">
+      <div className="grid grid-cols-3 bg-gray-100 rounded-lg p-1">
         <button
           onClick={() => setActiveTab('upload')}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
          }
   )
}
+          className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
             activeTab === 'upload'
              ? 'bg-white text-blue-600 shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
}
@@ .. @@
         </button>
         <button
           onClick={() => setActiveTab('templates')}
-          className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors ${
}
}
              ? 'bg-white text-blue-600 shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
               ? 'bg-white text-blue-600 shadow-sm'
               : 'text-gray-600 hover:text-gray-800'
}
@@ .. @@
         </button>
         <button
           onClick={() => setActiveTab('ai')}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
}
+          className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
             activeTab === 'ai'
              ? 'bg-white text-purple-600 shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
}
}
@@ .. @@
           <button
             onClick={() => fileInputRef.current?.click()}
-            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            className="w-full p-8 border-2 border-dashed border-gray-300/60 rounded-2xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group shadow-sm hover:shadow-lg"
           >
-            <Upload className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mx-auto mb-1" />
-            <p className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">
            <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-cyan-100 rounded-2xl inline-block mb-4">
              <Upload className="h-10 w-10 text-gray-400 group-hover:text-blue-500 mx-auto transition-colors" />
            </div>
            <p className="text-base text-gray-600 group-hover:text-blue-600 font-bold mb-2">
               Click to upload image
             </p>
            <p className="text-sm text-gray-400 font-medium">PNG, JPG, GIF up to 10MB</p>
@@ .. @@
 
       {activeTab === 'templates' && (
)
}
-        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 max-h-72 overflow-y-auto">
           {MEME_TEMPLATES.map((template, index) => (
             <button
               key={index}
               onClick={() => handleTemplateSelect(template.url)}
              className="relative group overflow-hidden rounded-xl border-2 border-gray-200/60 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
)
}
-              className="relative group overflow-hidden rounded-md border border-gray-200 hover:border-blue-400 transition-colors"
+              className="relative group overflow-hidden rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
             >
               <img
                 src={template.url}
                 alt={template.name}
                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
+                className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-200"
               />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-bold bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
+                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-2 py-1 rounded">
                   {template.name}
                 </span>
               </div>