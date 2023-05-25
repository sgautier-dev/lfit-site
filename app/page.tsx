import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto min-h-screen">
      <div className="relative xl:mx-auto xl:max-w-7xl xl:px-8">
         <p className='text-center'>L. FIT</p>
          <Image
            src="/images/sean-oulashin-KMn4VEeEPR8-unsplash-2400X1595.jpg"
            alt="votre coach fitness sur la plage, ermitage la réunion"
            width={2400}
						height={1595}
            className="absolute inset-0 -z-10 aspect-[16/9] xl:aspect-[9/4] w-full object-cover"
          />
        </div>
      
    </main>
  )
}
