import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ShopCart = React.lazy(() => import('shop-cart/Module'));
const About = React.lazy(() => import('about/Module'));
const TestRemoteNext = React.lazy(() => import('test-remote-next/Module'));
const RemoteApp = React.lazy(() => import('remote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop-cart">ShopCart</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test-remote-next">test-remote-next</Link>
        </li>
        <li>
          <Link to="/remoteApp">remote out source app</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/test-remote-next" element={<TestRemoteNext />} />
        <Route path="/remoteApp" element={<RemoteApp data={'some data from main app changed'} token={'token:qe918734odjfkljja;ldfjajdkfjhalkdfh'} />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
