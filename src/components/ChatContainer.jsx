import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const currentUserId = '680f50e4f10f3cd28382ecf9' // Replace with your logged-in user ID

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* Chat Header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={selectedUser?.profilepic || assets.profile_martin}
          alt={selectedUser?.fullName || "User"}
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser?.fullName || "Martin Johnson"}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="Back"
          className="md:hidden w-7 cursor-pointer"
        />
        <img src={assets.help_icon} alt="Help" className="hidden md:block w-5" />
      </div>

      {/* Chat messages */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => {
          const isCurrentUser = msg.senderId === currentUserId
          return (
            <div
              key={index}
              className={`flex items-end gap-2 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
            >
              {msg.image ? (
                <img
                  src={msg.image}
                  alt="msg"
                  className="max-w-[230px] border border-gray-700 rounded-lg mb-2"
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-2 break-words bg-violet-500/30 text-white 
                    ${isCurrentUser ? 'rounded-br-none' : 'rounded-bl-none'}`}
                >
                  {msg.text}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden h-full">
      <img src={assets.logo_icon} className="w-16" alt="Logo" />
      <p className="text-lg font-medium text-white">Chat Anytime Anywhere</p>
    </div>
  )
}

export default ChatContainer
