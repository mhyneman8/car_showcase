import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CustomButton } from '@/components';

const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
				<Link
					href='/'
					className='flex justify-center items-center'
				>
					<Image
						src='/logo.svg'
						alt='logo'
						width={100}
						height={100}
						className='object-contain'
					/>
				</Link>

				<CustomButton
					title='Sign In'
					btnType='button'
					containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
					// handleClick={}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
