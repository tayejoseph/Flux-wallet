import React, { useState, useEffect } from "react";
import { Route, useRouteMatch, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import { Button } from "../../UI";
import { getUserDetails, getUserNotifications } from "../../store/actions/user";
import DashboardSideNav from "../DashboardSideNav";
import {
  Wallet,
  Cards,
  Gifts,
  Store,
  RequestMoney,
  AddCash,
  NewUser,
  ProductDetails,
  ProductForm,
  Transactions,
  Notification,
  VirtualCard,
} from "../../view";
import Container from "./styles";

const DashBoard = () => {
  const dispatch = useDispatch();
  const [showMenu, setDisplay] = useState(false);
  const { path } = useRouteMatch();

  const handleHideDrawer = (e) => {
    e.stopPropagation();
    setDisplay(false);
  };

  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(getUserNotifications());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setDisplay(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <header className={"nav-mobile"}>
        <Button icon onClick={() => setDisplay(!showMenu)}>
          <IoMdMenu />
        </Button>
      </header>
      <aside
        className={`side-nav ${showMenu ? "open-menu_mobile" : ""}`}
        onClick={handleHideDrawer}
      >
        <DashboardSideNav />
      </aside>

      <main className="dashboard-main">
        <Route path={`${path}/notification`} component={Notification} />
        <Route path={`${path}/wallet/summary`} component={Wallet} />
        <Route path={`${path}/wallet/addCash`} component={AddCash} />
        <Route path={`${path}/wallet/transactions`} component={Transactions} />
        <Route path={`${path}/cards`} component={Cards} />
        <Route path={`${path}/gifts`} component={Gifts} />
        <Route path={`${path}/virtualCard`} component={VirtualCard} />
        <Route path={`${path}/store`} component={Store} />
        <Route path={`${path}/store/add`} component={ProductForm} />
        <Route path={`${path}/store/:productId/:action`}>
          <Switch>
            <Route
              path={`${path}/store/:productId/details`}
              component={ProductDetails}
            />
            <Route
              path={`${path}/store/:productId/edit`}
              component={ProductForm}
            />
          </Switch>
        </Route>
        <Route path={`${path}/store/newUser`} component={NewUser} />
        <Route path={`${path}/requestMoney`} component={RequestMoney} />
      </main>
    </Container>
  );
};

export default DashBoard;
