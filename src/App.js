import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import DashBoard from './Layout/DashBoard'
import Notifications from 'react-notify-toast'

// import { ProtectedRoute } from './Components'
import {
  AirtimeTopUp,
  DataTopUp,
  SendMoney,
  WithDraw,
  Auth,
  Settings,
} from './View'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const App = () => {
  const {
    user: { authenticated },
  } = useSelector((s) => s)
  const location = useLocation()
  const background = location.state?.background && {
    ...location.state.background,
    state: {
      background: location?.state.background
        ? location.pathname.split('/')[location.pathname.split('/').length - 1]
        : false,
    },
  }

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <Notifications />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Switch location={background || location}>
          <Route path="/" exact={true}>
            {authenticated ? (
              <Redirect to="/dashboard/wallet/summary" />
            ) : (
              <Redirect to="/auth/logIn" />
            )}
          </Route>
          <Route path="/auth/:authMethod">
            {authenticated ? (
              <Redirect to="/dashboard/wallet/summary" />
            ) : (
              <Auth />
            )}
          </Route>
          <Route path="/dashboard">
            {authenticated ? <DashBoard /> : <Redirect to="/" />}
          </Route>
        </Switch>

        {/* Switch for modals with background routes */}
        <Switch>
          <Route path={`/dashboard/airTimeTopUp`} component={AirtimeTopUp} />
          <Route path={`/dashboard/sendMoney`} component={SendMoney} />
          <Route path={`/dashboard/dataTopUp`} component={DataTopUp} />
          <Route path={`/dashboard/settings`} component={Settings} />
          <Route path={`/dashboard/wallet/withdraw`} component={WithDraw} />
        </Switch>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
