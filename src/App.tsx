import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "@/components/layout/layout.tsx";
import DashBroad from "@/pages/DashBroad.tsx";


export default function App() {


    return (

        <NextUIProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={ <DashBroad />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </NextUIProvider>

    )
}
