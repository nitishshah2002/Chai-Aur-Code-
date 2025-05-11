import React from 'react'

export default function Card({someObj,btnText="visit me"}) {
    // console.log("Props",props)
    const {username} = someObj;
    console.log(username)

  return (
    <div>
      <div class="max-w-sm mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card Image" />
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="text-gray-600 mt-2 text-sm">
      This is a simple card built with Tailwind CSS. It’s clean, responsive, and easy to customize.
    </p>
    <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
      {btnText}
    </button>
  </div>
</div>

    </div>
  )
}
