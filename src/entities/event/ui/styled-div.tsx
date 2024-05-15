import React from 'react'

interface StyledDivProps {
  text: string
}

export const StyledDiv: React.FC<StyledDivProps> = ({ text }) => {
  return (
    <div className="flex w-max p-8 rounded-xl mx-auto mt-16 text-4xl text-red-600 font-bold bg-[#b7f1b2] border-2 border-[#962433]">
      {text}
    </div>
  )
}
