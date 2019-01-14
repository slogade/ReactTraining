import * as React from 'react'

import { Dragable } from './Dragable'
import { Dropable } from './Dropable'

export default class App extends React.Component {
	state: { dragable: Array<any>, dropped: Array<any> }
	constructor(props: any) {
		super(props)

		this.state = {
			dragable: [
				{
					id: 1,
					first_name: 'Brigida',
					last_name: 'Denison',
					email: 'bdenison0@mozilla.org',
					gender: 'Female',
					ip_address: '152.228.153.85',
					status: 1
				},
				{
					id: 2,
					first_name: 'Ivan',
					last_name: 'Farey',
					email: 'ifarey1@storify.com',
					gender: 'Male',
					ip_address: '113.130.239.178',
					status: 1
				},
				{
					id: 3,
					first_name: 'Jessalin',
					last_name: 'Fortin',
					email: 'jfortin2@ifeng.com',
					gender: 'Female',
					ip_address: '221.52.215.18',
					status: 1
				},
				{
					id: 4,
					first_name: 'Cam',
					last_name: 'Sowerby',
					email: 'csowerby3@time.com',
					gender: 'Male',
					ip_address: '39.139.238.178',
					status: 1
				},
				{
					id: 5,
					first_name: 'Chilton',
					last_name: 'Shingler',
					email: 'cshingler4@soundcloud.com',
					gender: 'Male',
					ip_address: '230.219.242.74',
					status: 1
				},
				{
					id: 6,
					first_name: 'Briny',
					last_name: 'Van der Velden',
					email: 'bvandervelden5@bloglovin.com',
					gender: 'Female',
					ip_address: '193.222.51.83',
					status: 1
				},
				{
					id: 7,
					first_name: 'Sly',
					last_name: 'Osgordby',
					email: 'sosgordby6@nps.gov',
					gender: 'Male',
					ip_address: '72.29.207.206',
					status: 1
				},
				{
					id: 8,
					first_name: 'Efrem',
					last_name: 'Foot',
					email: 'efoot7@csmonitor.com',
					gender: 'Male',
					ip_address: '155.4.38.166',
					status: 1
				},
				{
					id: 9,
					first_name: 'Chrisse',
					last_name: 'Clampett',
					email: 'cclampett8@vk.com',
					gender: 'Male',
					ip_address: '115.161.24.239',
					status: 1
				},
				{
					id: 10,
					first_name: 'Caleb',
					last_name: 'Guiu',
					email: 'cguiu9@dot.gov',
					gender: 'Male',
					ip_address: '3.220.51.241',
					status: 1
				},
				{
					id: 11,
					first_name: 'Odetta',
					last_name: 'Seville',
					email: 'osevillea@smugmug.com',
					gender: 'Female',
					ip_address: '70.202.92.124',
					status: 1
				},
				{
					id: 12,
					first_name: 'Adorne',
					last_name: 'Garlee',
					email: 'agarleeb@vkontakte.ru',
					gender: 'Female',
					ip_address: '75.163.19.20',
					status: 1
				},
				{
					id: 13,
					first_name: 'Jorie',
					last_name: 'Licari',
					email: 'jlicaric@oaic.gov.au',
					gender: 'Female',
					ip_address: '26.177.28.80',
					status: 1
				},
				{
					id: 14,
					first_name: 'Adey',
					last_name: 'Gerriessen',
					email: 'agerriessend@cmu.edu',
					gender: 'Female',
					ip_address: '208.3.155.124',
					status: 1
				},
				{
					id: 15,
					first_name: 'Morse',
					last_name: 'Hempshall',
					email: 'mhempshalle@narod.ru',
					gender: 'Male',
					ip_address: '42.197.204.133',
					status: 1
				},
				{
					id: 16,
					first_name: 'Eustace',
					last_name: 'Folbigg',
					email: 'efolbiggf@diigo.com',
					gender: 'Male',
					ip_address: '106.157.147.46',
					status: 1
				},
				{
					id: 17,
					first_name: 'Chen',
					last_name: 'Honack',
					email: 'chonackg@nbcnews.com',
					gender: 'Male',
					ip_address: '143.179.69.172',
					status: 1
				},
				{
					id: 18,
					first_name: 'Caye',
					last_name: 'Duncklee',
					email: 'cdunckleeh@pinterest.com',
					gender: 'Female',
					ip_address: '165.134.116.244',
					status: 1
				},
				{
					id: 19,
					first_name: 'Blakeley',
					last_name: 'Lenden',
					email: 'blendeni@aboutads.info',
					gender: 'Female',
					ip_address: '236.123.202.7',
					status: 1
				},
				{
					id: 20,
					first_name: 'Tracey',
					last_name: 'Mellody',
					email: 'tmellodyj@flavors.me',
					gender: 'Female',
					ip_address: '54.155.144.2',
					status: 1
				},
				{
					id: 21,
					first_name: 'Leland',
					last_name: 'Beastall',
					email: 'lbeastallk@netscape.com',
					gender: 'Female',
					ip_address: '160.180.164.34',
					status: 1
				},
				{
					id: 22,
					first_name: 'Sherry',
					last_name: 'Kilius',
					email: 'skiliusl@printfriendly.com',
					gender: 'Female',
					ip_address: '235.181.18.214',
					status: 1
				},
				{
					id: 23,
					first_name: 'Wynne',
					last_name: 'Fieldsend',
					email: 'wfieldsendm@google.fr',
					gender: 'Female',
					ip_address: '248.163.120.60',
					status: 1
				},
				{
					id: 24,
					first_name: 'Courtenay',
					last_name: 'Womack',
					email: 'cwomackn@wikia.com',
					gender: 'Female',
					ip_address: '9.253.170.47',
					status: 1
				},
				{
					id: 25,
					first_name: 'Amil',
					last_name: 'Newband',
					email: 'anewbando@acquirethisname.com',
					gender: 'Female',
					ip_address: '184.86.231.83',
					status: 1
				},
				{
					id: 26,
					first_name: 'Bev',
					last_name: 'Forman',
					email: 'bformanp@cargocollective.com',
					gender: 'Male',
					ip_address: '31.250.109.52',
					status: 1
				},
				{
					id: 27,
					first_name: 'Agnesse',
					last_name: 'Saberton',
					email: 'asabertonq@tripod.com',
					gender: 'Female',
					ip_address: '65.154.109.87',
					status: 1
				},
				{
					id: 28,
					first_name: 'Brod',
					last_name: 'Real',
					email: 'brealr@yolasite.com',
					gender: 'Male',
					ip_address: '21.187.168.95',
					status: 1
				},
				{
					id: 29,
					first_name: 'Otho',
					last_name: 'Dingsdale',
					email: 'odingsdales@infoseek.co.jp',
					gender: 'Male',
					ip_address: '253.104.253.249',
					status: 1
				},
				{
					id: 30,
					first_name: 'Shayne',
					last_name: 'Baptista',
					email: 'sbaptistat@nifty.com',
					gender: 'Male',
					ip_address: '87.252.75.102',
					status: 1
				},
				{
					id: 31,
					first_name: 'Alicea',
					last_name: 'Harraway',
					email: 'aharrawayu@diigo.com',
					gender: 'Female',
					ip_address: '101.115.116.84',
					status: 1
				},
				{
					id: 32,
					first_name: 'Lay',
					last_name: 'Bisiker',
					email: 'lbisikerv@rediff.com',
					gender: 'Male',
					ip_address: '128.168.166.183',
					status: 1
				},
				{
					id: 33,
					first_name: 'Zed',
					last_name: 'Stille',
					email: 'zstillew@booking.com',
					gender: 'Male',
					ip_address: '177.187.59.146',
					status: 1
				},
				{
					id: 34,
					first_name: 'Lu',
					last_name: 'Mosco',
					email: 'lmoscox@github.io',
					gender: 'Female',
					ip_address: '138.135.242.144',
					status: 1
				},
				{
					id: 35,
					first_name: 'Dorine',
					last_name: 'Theuss',
					email: 'dtheussy@cyberchimps.com',
					gender: 'Female',
					ip_address: '68.196.101.79',
					status: 1
				},
				{
					id: 36,
					first_name: 'Florenza',
					last_name: 'Fiddymont',
					email: 'ffiddymontz@wp.com',
					gender: 'Female',
					ip_address: '51.145.99.127',
					status: 1
				},
				{
					id: 37,
					first_name: 'Kerrill',
					last_name: 'Paige',
					email: 'kpaige10@google.com.hk',
					gender: 'Female',
					ip_address: '209.44.98.68',
					status: 1
				},
				{
					id: 38,
					first_name: 'Emmi',
					last_name: 'Hewkin',
					email: 'ehewkin11@deviantart.com',
					gender: 'Female',
					ip_address: '112.50.150.162',
					status: 1
				},
				{
					id: 39,
					first_name: 'Geri',
					last_name: 'Comfort',
					email: 'gcomfort12@blogs.com',
					gender: 'Male',
					ip_address: '162.87.223.85',
					status: 1
				},
				{
					id: 40,
					first_name: 'Brander',
					last_name: 'Dreamer',
					email: 'bdreamer13@vk.com',
					gender: 'Male',
					ip_address: '79.40.74.160',
					status: 1
				},
				{
					id: 41,
					first_name: 'Dill',
					last_name: 'Schanke',
					email: 'dschanke14@chicagotribune.com',
					gender: 'Male',
					ip_address: '171.247.246.126',
					status: 1
				},
				{
					id: 42,
					first_name: 'Wittie',
					last_name: 'Sherreard',
					email: 'wsherreard15@eventbrite.com',
					gender: 'Male',
					ip_address: '217.164.160.79',
					status: 1
				},
				{
					id: 43,
					first_name: 'Clyde',
					last_name: 'Sackler',
					email: 'csackler16@etsy.com',
					gender: 'Male',
					ip_address: '189.9.215.143',
					status: 1
				},
				{
					id: 44,
					first_name: 'Weylin',
					last_name: 'Dur',
					email: 'wdur17@blinklist.com',
					gender: 'Male',
					ip_address: '44.140.106.216',
					status: 1
				},
				{
					id: 45,
					first_name: 'Stephen',
					last_name: 'Hawkins',
					email: 'wdur17@blinklist.com',
					gender: 'Male',
					ip_address: '12.140.132.206',
					status: 1
				}
			],
			dropped: new Array(45).fill(null)
		}
	}

	// On Drag Start
	dragStart = () => {
		let index = this.state.dropped.findIndex(user => user === null)
		let dropped = this.state.dropped
		dropped[index] = {suggested: true}
		this.setState({ dropped })
	}

	// On Drag End
	dragEnd = () => {
		let index = this.state.dropped.findIndex(user => user && user.suggested)
		let dropped = this.state.dropped
		dropped[index] = null
		this.setState({ dropped })
	}

	// On Drop
	drop = (id: number, index: number) => {
		let {dragable, dropped} = this.state
		dropped[index] = dragable[id - 1]
		dragable[id - 1] = null
		this.setState({dragable, dropped})
		this.dragEnd()
	}

	// On Remove
	remove = (id: number, index: number) => {
		let {dragable, dropped} = this.state
		dragable[id - 1] = dropped[index]
		dropped[index] = null
		this.setState({dragable, dropped})
	}

	// Get User
	getUserElementForList = (user: any) => {
		return user ? (
			<Dragable user={user} key={user.id} dragStart={this.dragStart} dragEnd={this.dragEnd} />
		) : (
			''
		)
	}

	// Get Users Table
	getUsersTable = () => {
		let rows = []
		for (var i = 0; i < 9; i++) {
			let cell = []
			for (var j = 0; j < 5; j++) {
				cell.push(
					<Dropable key={j} user={this.state.dropped[(i * 5 + j)]} index={(i * 5 + j)} drop={this.drop} remove={this.remove} />
				)
			}
			rows.push(
				<div className="user-table" key={i}>
					{cell}
				</div>
			)
		}
		return rows
	}

	render() {
		return (
			<div className="app-container">
				<div className="header">User Management</div>

				<div className="content">
					{/* Users List */}
					<div className="list" id="user-list">
						{this.state.dragable.map((user: any) => this.getUserElementForList(user))}
					</div>

					{/* Users Table */}
					<div className="users-table">{this.getUsersTable()}</div>
				</div>
			</div>
		)
	}
}
