import React from 'react'
import { SlidingCard } from '../components'
import { FaPenToSquare } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { ImFolderDownload } from "react-icons/im";
import { FaMobileScreen } from "react-icons/fa6";
function CardCollection({ className }) {
  return (
    <div className={`${className} flex flex-col md:flex-row md:w-full md:justify-center px-3 gap-3`}>
      <SlidingCard Icon={FaPenToSquare} heading={"Form Builder"} summary={"Easy-to-use form builder for each resume section"} bgColor={"var(--light-blue)"} />
      <SlidingCard Icon={VscPreview} heading={"Live Preview"} summary={"Live preview while you type"} bgColor={"var(--light-blue2)"} />
      {/* <SlidingCard Icon={FaPenToSquare} heading={"Templates"} summary={" Clean, professional templates"} bgColor={"var(--light-blue)"} /> */}
      <SlidingCard Icon={ImFolderDownload} heading={"PDF Download"} summary={"One-click PDF download"} bgColor={"var(--light-blue)"} />
      <SlidingCard Icon={FaMobileScreen} heading={"Mobile Friendly"} summary={"Mobile-friendly design"} bgColor={"var(--light-blue2)"} />
    </div>
  )
}

export default CardCollection