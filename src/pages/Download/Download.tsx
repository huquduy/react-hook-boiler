import { Button, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import {
	Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import Link from 'components/Link'
import TabPanel from 'components/TabPanel'
import TextInput from 'components/TextInput'
import { imageSrc } from 'config'
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useMemo, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { post } from 'services/http'
import DOWNLOADTYPES, { getGameType, IProviderProps, PLAYTECH } from './constant'
import './style.scss'

interface IForm {
	password: string,
	confirmPassword: string,
	username: string,

}
const { Form } = withTypes<IForm>()

const Download: React.FC<RouteComponentProps> = ({ history }) => {
	const { auth } = React.useContext(AuthContext)
	const [activeTab, setActiveTab] = useState(PLAYTECH)
	const isLogged = !auth.token.length
	const [, withLoading] = useLoading(false)
	const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
	const [initialValues, setInitialValues] = useState<IForm>({
		confirmPassword: '',
		password: '',
		username: '',
	})

	const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => {
		setActiveTab(newValue);
	};
	const handleUpdatePassword = async ({ password }) => {
		const { error } = await withLoading(() => post({
			body: {
				password
			},
			path: 'playtech/password/update'
		})).catch(err => err)
		if (error) {
			// return showSnackbar(error)
			return showDialog(error, 'Error')
		}
		// history.push('/home')
		return showDialog('Deposit Succesfully', 'Success')
	}

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const { providers }: { providers: IProviderProps[] } = useMemo(() => getGameType(activeTab), [activeTab])

	return (
		<div className='download-page'>
			<Header />
			<Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
				MOBILE DOWNLOAD
            </Typography>
			{/* Provider list */}
			<div className='game-tabs'>
				<Tabs
					className="custom_tab"
					value={activeTab}
					onChange={handleChangeTab}
					indicatorColor="primary"
					variant="scrollable"
					scrollButtons="on"
				>
					{map(({ idName }: { idName: string }) => <Tab
						key={idName}
						label={<div>
							<img className='game-type-icon' alt='hokibet188' src={`${imageSrc}icons/download.png`} />
							<Typography variant="caption" display="block" gutterBottom={true}>
								{idName}
							</Typography>
						</div>}
						value={idName}
					/>, DOWNLOADTYPES)}
				</Tabs>
				<TabPanel value={activeTab}>
					<Grid container={true} spacing={1}>
						{map(({ image, idName, route, target, title, version }: IProviderProps) =>
							<Grid item={true} xs={4} sm={4} key={idName}>
								<Paper className='provider'>
									<Typography variant="caption" display="block" gutterBottom={true}>
										{title}
									</Typography>
									<Typography variant="caption" display="block" gutterBottom={true}>
										{version}
									</Typography>
									<img className='logo' alt='hokibet188' src={`${imageSrc}icons/${image}`} />
								</Paper>
								<Link className="btn-download" href={route} target={target}>
									Download
                </Link>
							</Grid>
							, providers)}
					</Grid>
					<Paper>
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
											/>
										</div>
										<div>
											<Field
												name="password"
												label="Password: "
												type="text"
												fullWidth={true}
												component={TextInput}
											/>
										</div>
										<div>
											<Field
												name="confirmPassword"
												label="Memastikan Password :"
												type="text"
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
					</Paper>
				</TabPanel>
			</div>
			<ErrorDialogComponent />
			<Bottom />
		</div>
	)
}

export default withRouter(Download)
