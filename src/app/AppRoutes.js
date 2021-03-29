import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// const Dashboard = lazy(() => import('./dashboard/Dashboard'));

// const Signin = lazy(() => import('./general-pages/Signin'));
// const Signup = lazy(() => import('./general-pages/Signup'));

// const Buttons = lazy(() => import('./ui-elements/Buttons'));
// const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'));
// const Icons = lazy(() => import('./ui-elements/Icons'));

const FormElements = lazy(() => import('./form/FormElements'));

// const ChartJs = lazy(() => import('./charts/ChartJs'));

// const BasicTable = lazy(() => import('./tables/BasicTable'));
const Home = lazy(() => import('./carzy-components/home/Home'));
const Shop = lazy(() => import('./carzy-components/shop/Shop'));
const Customize = lazy(() =>
  import('./carzy-components/customizeproduct/Customize')
);
const Events = lazy(() => import('./carzy-components/events/Events'));
const AboutUs = lazy(() => import('./carzy-components/aboutus/AboutUs'));
const ContactUs = lazy(() => import('./carzy-components/contactus/ContactUs'));
const Cart = lazy(() => import('./carzy-components/cart/Cart'));

export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/carzy-home'></Redirect>
          </Route>
          {/* <Route exact path='/dashboard' component={Dashboard} />

          <Route exact path='/general-pages/signin' component={Signin} />
          <Route exact path='/general-pages/signup' component={Signup} />

          <Route exact path='/ui-elements/buttons' component={Buttons} />
          <Route exact path='/ui-elements/dropdowns' component={Dropdowns} />
          <Route exact path='/ui-elements/icons' component={Icons} />


          <Route exact path='/charts/chartjs' component={ChartJs} />

          <Route exact path='/tables/basic-table' component={BasicTable} /> */}
          <Route exact path='/carzy-home' component={Home} />

          <Route exact path='/form/form-elements' component={FormElements} />
          <Route exact path='/carzy-cart' component={Cart} />
          {/* <Route
            exact
            path='/carzy-shop'
            render={(props) => {
              return <Shop {...props} />;
            }}
          /> */}
          <Route exact path='/carzy-customize' component={Customize} />
          <Route exact path='/carzy-events' component={Events} />
          <Route exact path='/carzy-about-us' component={AboutUs} />
          <Route exact path='/carzy-contact-us' component={ContactUs} />
          <Route exact path='/carzy-shop/:id' component={Shop} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
