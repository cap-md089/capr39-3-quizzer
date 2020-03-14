import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
	MemberObject,
	RegistryValues,
	SigninReturn,
	SuccessfulSigninReturn,
	AccountObject
} from './types';

export interface PageProps<R = {}> {
	member: MemberObject | null;
	account: AccountObject;
	// routeProps: RouteComponentProps<R>;
	registry: RegistryValues;
	fullMemberDetails: SigninReturn;
	authorizeUser: (arg: SigninReturn) => void;
	updateSideNav: (links: SideNavigationItem[], force?: boolean) => void;
	updateBreadCrumbs: (links: BreadCrumb[]) => void;
	updateApp: () => void;
}

export type SideNavigationItem =
	| { type: 'Reference'; target: string; text: React.ReactChild }
	| { type: 'Link'; target: string; text: React.ReactChild };

export interface BreadCrumb {
	text: string;
	target: string;
}

export default abstract class Page<
	P extends PageProps = PageProps,
	S = {},
	SS = {}
> extends React.Component<P, S, SS> {
	public abstract state: S;

	public abstract render(): JSX.Element | null;
}

export const MEMBER_OBJECT: SuccessfulSigninReturn = {
	error: -1,
	sessionID: '',
	member: {
		id: 542488,
		contact: {
			ALPHAPAGER: {},
			ASSISTANT: {},
			CADETPARENTEMAIL: {},
			CADETPARENTPHONE: {},
			CELLPHONE: {},
			DIGITALPAGER: {},
			EMAIL: {},
			HOMEFAX: {},
			HOMEPHONE: {},
			INSTANTMESSAGER: {},
			ISDN: {},
			RADIO: {},
			TELEX: {},
			WORKFAX: {},
			WORKPHONE: {}
		},
		nameFirst: 'Andrew',
		nameLast: 'Rioux',
		nameMiddle: 'D',
		nameSuffix: '',
		usrID: 'riouxad',
		type: 'CAPNHQMember',
		teamIDs: [0, 2],
		permissions: {
			AdministerPT: 0,
			AssignTasks: 0,
			FileManagement: 0,
			FlightAssign: 0,
			MusterSheet: 0,
			PTSheet: 0,
			PromotionManagement: 0,
			AssignTemporaryDutyPositions: 0,
			EventContactSheet: 0,
			EventLinkList: 0,
			ORMOPORD: 0,
			ProspectiveMemberManagement: 0,
			CreateNotifications: 0,
			ManageEvent: 0,
			ManageTeam: 0,
			ScanAdd: 0,
			DownloadCAPWATCH: 0,
			PermissionManagement: 0,
			RegistryEdit: 0
		},
		dutyPositions: [
			{ duty: 'Cadet Commander', date: 1560916800000, type: 'NHQ' },
			{ duty: 'Cadet IT Officer', date: 1533960000000, type: 'NHQ' }
		],
		memberRank: 'C/LtCol',
		orgid: 916,
		seniorMember: false,
		squadron: 'MAR-MD-089',
		expirationDate: 1612069200000,
		flight: null,
		absenteeInformation: null
	},
	notificationCount: 0,
	taskCount: 6
};

export const REGISTRY: RegistryValues = {
	id: 'mdx89',
	Contact: {
		Flickr: '',
		Discord: 'qsA9SJq',
		Twitter: '',
		YouTube: '',
		FaceBook: '',
		LinkedIn: '',
		Instagram: '',
		MailingAddress: null,
		MeetingAddress: null
	},
	Website: {
		Name: "CAP St. Mary's",
		Timezone: 'America/New_York',
		Separator: ' - ',
		ShowUpcomingEventCount: 7,
		PhotoLibraryImagesPerPage: 20
	},
	accountID: 'mdx89',
	RankAndFile: { Flights: ['Alpha', 'Bravo', 'Charlie', 'Delta'] }
};

export const ACCOUNT_OBJECT: AccountObject = {
	adminIDs: [{ id: 542488, type: 'CAPNHQMember' }],
	echelon: false,
	expired: false,
	expires: 99999999999999,
	id: 'mdx89',
	mainOrg: 916,
	orgIDs: [916, 2529],
	paid: true,
	paidEventLimit: 500,
	unpaidEventLimit: 5,
	validPaid: true,
	aliases: ['test'],
	mainCalendarID: '',
	comments: '',
	initialPassword: '',
	serviceAccount: { hasValue: false },
	shareLink: '',
	wingCalendarID: ''
};
