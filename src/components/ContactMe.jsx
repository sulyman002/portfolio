import React from 'react'

const ContactMe = () => {
  return (
    <div className="flex flex-col i gap-50 w-full">
        <div class="w-[600px] mx-auto mt-10 rounded-2xl shadow-lg overflow-hidden bg-white">

  <div class="bg-gray-400 h-[36px] flex items-center gap-4 px-3">
    
    <div class="flex gap-1.5">
      <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
    </div>
  
    <div class="text-xs text-gray-700 font-medium">
      Extensions List
    </div>
    
  </div>


  <img
    src="/mnt/data/ds.PNG"
    alt="Extensions screenshot"
    class="w-full block"
  />
</div>

<div class="max-w-[800px] mx-auto mt-10 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-300">

  <div class="bg-gray-400 h-[38px] flex items-center justify-between px-4">
   
    <div class="flex items-center gap-2">
      <div class="w-3.5 h-3.5 bg-yellow-400 rounded-[2px]"></div>
      <span class="text-sm text-gray-800 font-medium">Extensions List</span>
    </div>


    <div class="flex items-center gap-2">
      <div class="w-3 h-[2px] bg-gray-600 rounded-sm"></div>
      <div class="w-3 h-3 border border-gray-600 rounded-[1px]"></div>
      <div class="w-3 h-3 bg-red-500 rounded-[1px]"></div>
    </div>
  </div>


  <img
    src="/mnt/data/ds.PNG"
    alt="Extensions screenshot"
    class="w-full block"
  />
</div>


    </div>
  )
}

export default ContactMe