import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import {Organisation} from "./pages/organisation";
import { Organisation1 } from "./pages/organisation1";
import {Headquater} from "./pages/headquater";
import {Activities} from "./pages/activities";
import {Login} from "./pages/login";
import {Profile} from "./pages/profile";
import {Admin} from "./pages/admin";
import {CreateMembers} from "./pages/createMembers";
import {Testimonies} from "./pages/testimonies";
import {ListTestimonies} from "./pages/listTestimonies";
import { ForgotPassword } from "./pages/forgotPassword";
import { PastEvent } from "./pages/pastEvent";


import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import {Nav} from "./component/nav";
import { Footer } from "./component/footer";
import { ListActivities } from "./pages/listActivities";
import { ListMembers } from "./pages/ListMembers";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Nav />
                    <Navbar />
                    <Routes className="">
                        <Route element={<Home />} path="/" />
                        <Route element={<Organisation />} path="/organisation" />
                        <Route element={<Organisation1 />} path="/organisation1" />
                        <Route element={<Headquater />} path="/headquater" />
                        <Route element={<Admin />} path="/admin" />
                        <Route element={<Activities />} path="/activities" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ForgotPassword />} path="/forgotPassword" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<ListActivities />} path="/listActivities" />
                        <Route element={<ListMembers />} path="/listMembers" />
                        <Route element={<CreateMembers />} path="/createMembers" />
                        <Route element={<Testimonies />} path="/testimonies" />
                        <Route element={<ListTestimonies />} path="/listTestimonies" />
                        <Route element={<PastEvent />} path="/pastEvent" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
