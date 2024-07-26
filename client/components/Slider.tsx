import React, { FC, useEffect, useState } from 'react'

interface Props {
	data: { src: string }[]
}

const Slider: FC<Props> = ({ data }) => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (data?.length) {
			setTimeout(() => {
				setActive((prev) => prev === data?.length ? 0 : ++prev)
			}, 5000)
		}
	}, [])

	return (
		<div className='border-b flex overflow-x-auto snap-x snap-mandatory p-4'>
			{
				data.map((e, idx) => {
					return <img src="" alt="" className='aspect-video w-full object-cover shrink-0 snap-center' key={`slider-${idx}`} />
				})
			}
		</div>
	)
}

export default Slider