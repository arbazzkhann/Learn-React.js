import { createRoot } from "react-dom/client";
import Button from "./components/Button";

import LeftArrow from './assets/images/left-arrow.png'
import RightArrow from './assets/images/right-arrow.png'

const root = createRoot(document.querySelector('#root'));

root.render(
    <div>
        <Button imageUrl={LeftArrow}/>
        <Button imageUrl={RightArrow}/>
    </div>
);