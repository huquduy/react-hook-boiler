import { Button, Typography } from '@material-ui/core'
import {
	Send as SendIcon,
} from '@material-ui/icons'

import TextInput from 'components/TextInput'
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import React, { useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { compareWithField, required } from 'services/form'
import { post } from 'services/http'

interface IForm {
	password: string,
	confirmPassword: string,
	username: string,
	infoText: string,
	showForm: boolean,
}
const { Form } = withTypes<IForm>()

const ProviderPassword = ({ url, username, infoText, showForm }) => {
	const { auth } = React.useContext(AuthContext)
	const [isLoading, withLoading] = useLoading(false)
	const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
	const [initialValues, setInitialValues] = useState<IForm>({
		confirmPassword: '',
		password: '',
		username: username,
		infoText: infoText,
		showForm: showForm,
	})
	const handleUpdatePassword = async ({ password }) => {
		const { error } = await withLoading(() => post({
			body: {
				password
			},
			path: url
		})).catch(err => err)
		if (error) {
			return showDialog(error, 'Error')
		}
		return showDialog('Updated Succesfully', 'Success')
	}

	return (
		<div>
				{showForm ? <div className="form-password">
			<Form
				initialValues={initialValues}
				onSubmit={handleUpdatePassword}
			>
				{({ handleSubmit }) =>
					<form onSubmit={handleSubmit}>
						<div className='container'>
							{username ? <div>
								<Field
									name="username"
									label="Username :"
									type="text"
									fullWidth={true}
									component={TextInput}
									disabled={true}
								/>
							</div>: null}
							{ infoText ? <div>
								<Field
									validate={required}
									name="password"
									label="Password: "
									type="password"
									fullWidth={true}
									component={TextInput}
								/>
							</div>: null
							}
								{ infoText ? <div>
								<Typography color="primary" variant="caption" display="block" gutterBottom={true}>
									{infoText}
								</Typography>
							</div> : null}
							{infoText ? <div>
								<Field
									validate={compareWithField('password')}
									name="confirmPassword"
									label="Memastikan Password :"
									type="password"
									fullWidth={true}
									component={TextInput}
								/>
							</div> :null}
							{ infoText ? <div>
								<Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
									Submit
                </Button>
							</div>: null}
						</div>
					</form>}
			</Form>
			<ErrorDialogComponent />
		</div>: null}
		</div>
	
	)
}

export default ProviderPassword