import Image from 'next/image';
import hamburger from './../public/assets/hamburger.avif';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="z-10 mt-2 text-5xl md:text-8xl">Preston&apos;s BBQ</h1>
      <h3 className='z-10 text-2xl'>Food Better Than Your Mom&apos;s</h3>
      <Image
        src={hamburger}
        width={800}
        alt="picture of a hamburger with all the fixings"
        priority={true}

        className='-mt-12 md:-mt-20 z-0'
      />
      <p className='mx-12 md:mx-24 text-justify -mt-10 md:-mt-14 z-10'>
        Classic homestyle burgers and sides made with only the best ingredients. We offer three main dishes - a pure angus beef hamburger, a prime turkey burger, and a premium veggie burger. All dishes cooked to your taste and served with a wide variety of toppings all made with the freshest and best ingredients. Locally grown lettuce, onion, tomato, and pickles, as well as fresh mushrooms and cheese made at local daries. All served on a homemade bun with a side of freshly made coleslaw or fries made from locally grown potatoes. We pride ourselves in sourcing locally as it gives you the freshest and best food. I can tell you how good it is all day, but you will have to just come taste it yourself to be sure!
      </p>
      <Link 
        href='/order'
        className='border border-2-white bg-slate-100 rounded-full text-black px-4 py-2 my-8'
      >
        Order Now →
      </Link>
    </main>
  );
}

