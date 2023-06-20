import {Link, Outlet, Route, Routes} from "react-router-dom";
import {Home} from "./components/home";
import {About} from "./components/about";
import styled from "@emotion/styled";


export default function App(){
    return(
        <div>
            <div>
                <h1>하하하</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Button>아 귀찮다.</Button>
            </div>
            <Routes>
                {/*<Route path="/" />*/}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path={'*'} element={<div>있는걸 찾으세요.</div>} />
            </Routes>
            <Outlet />
            <ChatContainer>
            </ChatContainer>
        </div>
    )
}

const Button = styled.button`
  padding: 12px;
  background-color: #547b16;
  color: white;
`

const ChatContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`