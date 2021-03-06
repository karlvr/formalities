/**
 * An example of using Changeling to manage undefined properties.
 */

import { Formalities, Snapshot, wrapComponent, useController } from 'formalities'
import * as React from 'react'

interface MyFormState {
	myValue?: string
}

export default function Example8() {

	const controller = useController<MyFormState>({})
	const state = controller.snapshot().value

	return (
		<div>
			<h1>Example 8: Undefined</h1>

			<Formalities.Text controller={controller} prop="myValue" />
			<WrappedUndefinedSnapshot controller={controller} prop="myValue" /> 

			<h2>Summary</h2>
			{state.myValue || 'undefined'}
		</div>
	)
}

function UndefinedSnapshot(props: Snapshot<string | undefined>) {
	
	const controller = useController(props.value, props.setValue)
	return (
		<Formalities.Text controller={controller} prop="this" />
	)

}

const WrappedUndefinedSnapshot = wrapComponent(UndefinedSnapshot)
