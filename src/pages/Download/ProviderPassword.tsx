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
import { post } from 'services/http'
import { compareWithField, required } from 'services/form'

interface IForm {
	password: string,
	confirmPassword: string,
	username: string,
	inforText: string,
}
const { Form } = withTypes<IForm>()

const ProviderPassword = ({ url, username, inforText }) => {
	const { auth } = React.useContext(AuthContext)
	const [isLoading, withLoading] = useLoading(false)
	const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
	const [initialValues, setInitialValues] = useState<IForm>({
		confirmPassword: '',
		password: '',
		username: username,
		inforText: inforText
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
		<div className="form-password">
			<Form
				initialValues={initialValues}
				onSubmit={handleUpdatePassword}
			>
				{({ handleSubmit }) =>
					<form onSubmit={handleSubmit}>
						<div className='container'>
							<div>
								<Field
									name="username"
									label="Username :"
									type="text"
									fullWidth={true}
									component={TextInput}
									disabled={true}
								/>
							</div>
							<div>
								<Field
									validate={required}
									name="password"
									label="Password: "
									type="password"
									fullWidth={true}
									component={TextInput}
								/>
							</div>
							<div>
								<Typography color="primary" variant="caption" display="block" gutterBottom={true}>
									{inforText}
								</Typography>
							</div>
							<div>
								<Field
									validate={compareWithField('password')}
									name="confirmPassword"
									label="Memastikan Password :"
									type="password"
									fullWidth={true}
									component={TextInput}
								/>
							</div>
							<div>
								<Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
									Submit
                </Button>
							</div>
						</div>
					</form>}
			</Form>
			<ErrorDialogComponent />
		</div>
	)
}

export default ProviderPassword