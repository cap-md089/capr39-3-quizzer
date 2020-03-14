import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import './app.global.css';
import { ACCOUNT_OBJECT, MEMBER_OBJECT, REGISTRY } from './Page';
import { Quizzer } from './Quizzer';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
	render(
		<AppContainer>
			<Quizzer
				member={MEMBER_OBJECT.member}
				account={ACCOUNT_OBJECT}
				registry={REGISTRY}
				fullMemberDetails={MEMBER_OBJECT}
				authorizeUser={console.log}
				updateSideNav={console.log}
				updateBreadCrumbs={console.log}
				updateApp={console.log}
			/>
		</AppContainer>,
		document.getElementById('root')
	)
);
