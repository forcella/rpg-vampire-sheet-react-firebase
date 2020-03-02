import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Sheet from './container/Sheet'
import { PreludeEditor } from './component/prelude/PreludeEditor'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faSave)
library.add(faSync)
library.add(faFile)
library.add(faPrint)
library.add(faAngleUp)
library.add(faFileAlt)
library.add(faLongArrowAltLeft)
library.add(faPlus)
library.add(faMinus)

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/:id" component={Sheet} />
				<Route path="/prelude/:id" component={PreludeEditor} />
				<Route exact path="/" component={Sheet} />
			</Switch>
		</Router>
	)
}

export default App
