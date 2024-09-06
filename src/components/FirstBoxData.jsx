import React, { useState } from 'react'

const FirstBoxData = () => {

  const boxData = [
    {
      key: "About Me",
      content: "Hello! I'm Sagar, i am a developer i know MERN stack and Next js project which using Type script, i have bult many projects like chat app which is a real time chat website using socket io and another one like twitter like full stack website where also i have done secure authentication and another one like youtube many more projects i have done which are also in github. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam esse hic sint iste nostrum voluptatibus! Consectetur aliquam exercitationem dolores suscipit, reprehenderit veniam molestiae alias adipisci culpa quia tenetur, in id perferendis. Nulla, expedita eos inventore quas assumenda consequatur saepe."
    },
    {
      key: "Experiences",
      content: "I have created many full-stack projects using react js, mongoo DB, node js, express js and tailwind css for style and also i have used Next js in project and Type script, I don't have Experience from any internship or job but i have worked in many projects and i always prefer know more laguages and more new fremworks, now i am creating a Ecommece wabsite clone of flipkart using next js and type script and ecommerce seller is completed  .Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit sint voluptatibus, officiis architecto animi reprehenderit quae, quo, molestiae accusamus reiciendis cum quidem ducimus obcaecati molestias asperiores quibusdam? Ab cumque consectetur consequatur itaque eum asperiores aspernatur dignissimos architecto eligendi atque"
    },
    {
      key: "Recommended",
      content: "Here i have used in this project react and tailwind css and dynamically all components are placed and also it is responsive all desiged style vlaues from figma file some values are less or greter then figma file due to some style menagment, and at image and buttons used map dunction and use state . Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore dolorem quae necessitatibus possimus commodi porro maiores veritatis delectus beatae? Necessitatibus quis nobis in, quae repellendus incidunt, vero dolorem facilis itaque nisi, architecto a vitae suscipit cum nesciunt quod animi!"
    }
  ];

  const [selectedKey, setSelectedKey] = useState(boxData[0].key);

  const clickHandler = (key) =>{
    setSelectedKey(key);
  }

  return (
    <div className='h-full w-full'>
      <div className=' h-[62px] w-[94%] bg-black flex justify-evenly items-center font-semibold text-[12px] rounded-[23px]'>
        {
          boxData.map((data, i) => {
            return(
              <button className={`text-white rounded-xl px-[55px] h-[40px] flex justify-center items-center ml-2 hover:bg-zinc-700 
                ${selectedKey === data?.key ? 'bg-zinc-800' : ''}
                `} 
                onClick={() => clickHandler(data.key)} key={i}>
                {data.key}
              </button>
            )
          })
        }
      </div>

      <div className='h-[135px] w-[97%] mt-8 overflow-y-scroll custom-scrollbar'>
        {
          selectedKey && (
            <p className=' w-[93%] text-gray-400 p-2 text-[20px]'>
              {
                boxData.find(data => data.key === selectedKey)?.content
              }
            </p>
          )
        }
      </div>

    </div>
  )
}

export default FirstBoxData