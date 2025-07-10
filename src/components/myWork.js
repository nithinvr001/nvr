export default function MyWorks() {
    const myWords = [
        { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'},
        { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
        { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }, { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
        { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
        { title: 'Frontend Work', desciption: 'My First ever works i got appreciation for...', img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }

    ]
    return (
        <section className="p-3 lg:p-6 text-white ">
            <h2 className="text-3xl font-bold lg:py-[40px]">
                <span className="text-green-500">Cor</span>e tech stack
            </h2>
            <div className=" mt-3 lg:mt-0 flex space-x-10 overflow-x-scroll no-scrollbar">
                {myWords.map((works) => (
                    <div className="card bg-base-100 image-full min-w-96 shadow-sm">
                        <figure>
                            <img
                                src={works.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body m-auto">
                            <h2 className="card-title text-2xl m-auto">{works.title}</h2>
                            <p>{works.desciption}</p>
                        </div>
                  </div>
                ))}
            </div>
           </section> 
    )
}