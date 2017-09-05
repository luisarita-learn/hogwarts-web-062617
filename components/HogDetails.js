import React from 'react';

const HogDetails = ({hog}) => (
	<div className='description'>
		<p>
			specialty: {hog.specialty}
			<br/>
			highest medal achieved: {hog['highest medal achieved']}
			<br/>
			weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
			<br/>
			greased: {hog.greased.toString()}
			<br/>
		</p>
	</div>
)

export default HogDetails