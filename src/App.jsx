import s from './App.module.css';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import  HomePage  from './pages/HomePage/HomePage'
import  RegistrationPage  from './pages/RegistrationPage/RegistrationPage';
import  LoginPage  from './pages/LoginPage/LoginPage'
import ContactsPage from'./pages/ContactsPage/ContactsPage'

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong> ) : (
      <div className={s.mainContainer}>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/register'
                element={<RestrictedRoute
                  redirectTo='/contacts'
                  component={<RegistrationPage />} />} />
              <Route path='/login'
              element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
              <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
      
    )
};
export default App;
