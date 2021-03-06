/**
 * An example of using Formalities with Checkable input elements.
 */

import { useController, Formalities } from 'formalities'
import * as React from 'react'

interface MyFormState {
	likeAnimals: boolean
	favouriteAnimal: string
	favouriteBand: string
	optionalLikeBirds?: boolean
}

const INITIAL_STATE: MyFormState = {
	likeAnimals: true,
	favouriteAnimal: 'Giraffe',
	favouriteBand: 'The Cure',
}

export default function Example4() {

	const controller = useController(INITIAL_STATE)
	const state = controller.snapshot().value

	return (
		<div>
			<h1>Example 4: Checkable</h1>
			<div>
				<label><Formalities.Checkable 
					type="checkbox" 
					checkedValue={true} 
					uncheckedValue={false}
					controller={controller} 
					prop="likeAnimals" 
				/> Like animals</label>
			</div>
			<div>
				<label>Favourite animal:</label>
				<label>
					<Formalities.Checkable type="radio" checkedValue="Giraffe" controller={controller} prop="favouriteAnimal" />
					Giraffe
				</label>
				<label>
					<Formalities.Checkable type="radio" checkedValue="Cat" controller={controller} prop="favouriteAnimal" />
					Cat
				</label>
				<label>
					<Formalities.Checkable type="radio" checkedValue="Dog" controller={controller} prop="favouriteAnimal" />
					Dog
				</label>
			</div>
			<div>
				<label><Formalities.Checkable 
					type="checkbox" 
					checkedValue={true} 
					uncheckedValue={false}
					controller={controller} 
					prop="optionalLikeBirds" 
				/> Like animals</label>
			</div>
			<h2>Summary</h2>
			<div>Like animals: {`${state.likeAnimals}`} ({typeof state.likeAnimals})</div>
			<div>Favourite animal: {state.favouriteAnimal}</div>
		</div>
	)
}
