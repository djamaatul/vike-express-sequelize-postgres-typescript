import React, { useMemo } from 'react'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer';
import Menu from '../../components/Menu/+client'

function Page() {

	const slider = useMemo(() => [{ src: null }, { src: null }, { src: null }], []);
	const menus = useMemo(() => [{ title: 'Jobs', link: '/jobs' }], []);

	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex flex-col gap-4 flex-1'>
				<Slider data={slider} />
				<Menu data={menus} />
			</div>
			<Footer />
		</div>
	)
}

export default Page